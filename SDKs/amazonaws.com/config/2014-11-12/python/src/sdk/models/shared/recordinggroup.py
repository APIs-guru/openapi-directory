from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class RecordingGroup:
    all_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allSupported' }})
    include_global_resource_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeGlobalResourceTypes' }})
    resource_types: Optional[List[resourcetype_enum.ResourceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTypes' }})
    
