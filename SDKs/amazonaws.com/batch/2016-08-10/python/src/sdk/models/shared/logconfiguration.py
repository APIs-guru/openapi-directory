from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogConfiguration:
    r"""LogConfiguration
    Log configuration options to send to a custom log driver for the container.
    """
    
    log_driver: LogDriverEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDriver') }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret_options: Optional[List[Secret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretOptions') }})
    
