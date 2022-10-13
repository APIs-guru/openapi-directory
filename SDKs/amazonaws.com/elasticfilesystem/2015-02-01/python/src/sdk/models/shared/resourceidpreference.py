from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourceidtype_enum
from . import resource_enum


@dataclass_json
@dataclass
class ResourceIDPreference:
    resource_id_type: Optional[resourceidtype_enum.ResourceIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdType' }})
    resources: Optional[List[resource_enum.ResourceEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    
