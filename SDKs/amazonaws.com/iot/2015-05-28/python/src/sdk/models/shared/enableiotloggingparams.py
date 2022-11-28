from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnableIoTLoggingParams:
    r"""EnableIoTLoggingParams
    Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
    """
    
    log_level: LogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    role_arn_for_logging: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArnForLogging') }})
    
