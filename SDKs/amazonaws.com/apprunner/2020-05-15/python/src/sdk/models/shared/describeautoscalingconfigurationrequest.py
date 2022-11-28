from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeAutoScalingConfigurationRequest:
    auto_scaling_configuration_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    
