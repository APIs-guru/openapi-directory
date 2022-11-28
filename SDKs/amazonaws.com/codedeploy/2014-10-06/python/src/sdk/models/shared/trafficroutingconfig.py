from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrafficRoutingConfig:
    r"""TrafficRoutingConfig
    The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
    """
    
    time_based_canary: Optional[TimeBasedCanary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeBasedCanary') }})
    time_based_linear: Optional[TimeBasedLinear] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeBasedLinear') }})
    type: Optional[TrafficRoutingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
