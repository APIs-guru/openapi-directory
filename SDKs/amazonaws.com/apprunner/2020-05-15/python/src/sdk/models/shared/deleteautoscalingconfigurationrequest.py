from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAutoScalingConfigurationRequest:
    auto_scaling_configuration_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationArn' }})
    
