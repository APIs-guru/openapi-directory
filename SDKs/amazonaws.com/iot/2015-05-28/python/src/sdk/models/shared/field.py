from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldtype_enum


@dataclass_json
@dataclass
class Field:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[fieldtype_enum.FieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
