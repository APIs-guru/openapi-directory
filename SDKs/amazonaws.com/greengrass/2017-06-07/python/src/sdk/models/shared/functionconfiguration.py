from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionConfiguration:
    r"""FunctionConfiguration
    The configuration of the Lambda function.
    """
    
    encoding_type: Optional[EncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncodingType') }})
    environment: Optional[FunctionConfigurationEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    exec_args: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecArgs') }})
    executable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Executable') }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pinned') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    
