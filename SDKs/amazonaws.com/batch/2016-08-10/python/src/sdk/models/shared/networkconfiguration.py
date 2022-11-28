from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkConfiguration:
    r"""NetworkConfiguration
    The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
    """
    
    assign_public_ip: Optional[AssignPublicIPEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    
