from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import autoscalinggroupproviderupdate


@dataclass_json
@dataclass
class UpdateCapacityProviderRequest:
    auto_scaling_group_provider: autoscalinggroupproviderupdate.AutoScalingGroupProviderUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroupProvider' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
