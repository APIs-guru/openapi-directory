from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionDefaultConfig:
    r"""FunctionDefaultConfig
    The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
    """
    
    execution: Optional[FunctionDefaultExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Execution') }})
    
