from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionDefaultExecutionConfig:
    r"""FunctionDefaultExecutionConfig
    Configuration information that specifies how a Lambda function runs. 
    """
    
    isolation_mode: Optional[FunctionIsolationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsolationMode') }})
    run_as: Optional[FunctionRunAsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunAs') }})
    
