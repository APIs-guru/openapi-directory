from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import resourcegrouptag


@dataclass_json
@dataclass
class CreateResourceGroupRequest:
    resource_group_tags: List[resourcegrouptag.ResourceGroupTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroupTags' }})
    
