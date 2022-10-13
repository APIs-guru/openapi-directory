from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import autoscalingconfiguration


@dataclass_json
@dataclass
class CreateAutoScalingConfigurationResponse:
    auto_scaling_configuration: autoscalingconfiguration.AutoScalingConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfiguration' }})
    
