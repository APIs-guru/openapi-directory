from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggingOptions:
    r"""LoggingOptions
    The values of the AWS IoT Events logging options.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    level: LoggingLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    detector_debug_options: Optional[List[DetectorDebugOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorDebugOptions') }})
    
