from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentReadyOption:
    r"""DeploymentReadyOption
    Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
    """
    
    action_on_timeout: Optional[DeploymentReadyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionOnTimeout') }})
    wait_time_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitTimeInMinutes') }})
    
