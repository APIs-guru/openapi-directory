from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeBasedCanary:
    r"""TimeBasedCanary
    A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
    """
    
    canary_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canaryInterval') }})
    canary_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canaryPercentage') }})
    
