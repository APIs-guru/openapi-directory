from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attribute
from . import entitytype_enum


@dataclass_json
@dataclass
class UnmappedAttribute:
    attribute: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attribute' }})
    type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
