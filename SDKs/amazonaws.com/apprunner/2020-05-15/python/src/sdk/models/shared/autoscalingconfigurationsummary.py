from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoScalingConfigurationSummary:
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationArn' }})
    auto_scaling_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationName' }})
    auto_scaling_configuration_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationRevision' }})
    
