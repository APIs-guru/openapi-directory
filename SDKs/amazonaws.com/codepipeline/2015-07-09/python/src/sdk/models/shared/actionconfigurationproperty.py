from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actionconfigurationpropertytype_enum


@dataclass_json
@dataclass
class ActionConfigurationProperty:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    key: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    queryable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryable' }})
    required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    secret: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    type: Optional[actionconfigurationpropertytype_enum.ActionConfigurationPropertyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
