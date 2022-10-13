from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class ResourceKey:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
