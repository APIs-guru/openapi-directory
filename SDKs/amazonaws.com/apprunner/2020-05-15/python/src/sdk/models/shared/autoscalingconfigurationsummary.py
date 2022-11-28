from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoScalingConfigurationSummary:
    r"""AutoScalingConfigurationSummary
    <p>Provides summary information about an AWS App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p>
    """
    
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    auto_scaling_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationName') }})
    auto_scaling_configuration_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationRevision') }})
    
