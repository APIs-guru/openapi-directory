from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import generatorrecipe

class FieldPurposeEnum(str, Enum):
    UNKNOWN = ""
    USERNAME = "USERNAME"
    PASSWORD = "PASSWORD"
    NOTES = "NOTES"


@dataclass_json
@dataclass
class FieldSection:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class FieldTypeEnum(str, Enum):
    STRING = "STRING"
    EMAIL = "EMAIL"
    CONCEALED = "CONCEALED"
    URL = "URL"
    TOTP = "TOTP"
    DATE = "DATE"
    MONTH_YEAR = "MONTH_YEAR"
    MENU = "MENU"


@dataclass_json
@dataclass
class Field:
    entropy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entropy' }})
    generate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generate' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    purpose: Optional[FieldPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    recipe: Optional[generatorrecipe.GeneratorRecipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipe' }})
    section: Optional[FieldSection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    type: FieldTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
