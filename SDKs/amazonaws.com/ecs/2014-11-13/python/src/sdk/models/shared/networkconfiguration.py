from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkConfiguration:
    r"""NetworkConfiguration
    An object representing the network configuration for a task or service.
    """
    
    awsvpc_configuration: Optional[AwsVpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsvpcConfiguration') }})
    
