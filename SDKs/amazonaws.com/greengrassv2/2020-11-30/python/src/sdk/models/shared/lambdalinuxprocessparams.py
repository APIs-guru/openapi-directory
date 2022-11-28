from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaLinuxProcessParams:
    r"""LambdaLinuxProcessParams
    Contains parameters for a Linux process that contains an Lambda function.
    """
    
    container_params: Optional[LambdaContainerParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerParams') }})
    isolation_mode: Optional[LambdaIsolationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isolationMode') }})
    
