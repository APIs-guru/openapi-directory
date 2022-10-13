from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggroupprovider
from . import tag


@dataclass_json
@dataclass
class CreateCapacityProviderRequest:
    auto_scaling_group_provider: autoscalinggroupprovider.AutoScalingGroupProvider = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroupProvider' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
