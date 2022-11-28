from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLoggingOptionsResponse:
    r"""GetLoggingOptionsResponse
    The output from the GetLoggingOptions operation.
    """
    
    log_level: Optional[LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
