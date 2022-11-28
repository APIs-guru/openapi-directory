from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteCommandConfiguration:
    r"""ExecuteCommandConfiguration
    The details of the execute command configuration.
    """
    
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    log_configuration: Optional[ExecuteCommandLogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    logging: Optional[ExecuteCommandLoggingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    
