from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FieldPurposeEnum(str, Enum):
    UNKNOWN = ""
    USERNAME = "USERNAME"
    PASSWORD = "PASSWORD"
    NOTES = "NOTES"


@dataclass_json
@dataclass
class FieldSection:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
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
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: FieldTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    entropy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entropy') }})
    generate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generate') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    purpose: Optional[FieldPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    recipe: Optional[GeneratorRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    section: Optional[FieldSection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class FieldInput:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: FieldTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    generate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generate') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    purpose: Optional[FieldPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    recipe: Optional[GeneratorRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    section: Optional[FieldSection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
