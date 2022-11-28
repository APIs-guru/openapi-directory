from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkConfiguration:
    r"""NetworkConfiguration
    This structure specifies the network configuration for an ECS task.
    """
    
    awsvpc_configuration: Optional[AwsVpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsvpcConfiguration') }})
    
