from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDevicePoolCompatibilityRequest:
    r"""GetDevicePoolCompatibilityRequest
    Represents a request to the get device pool compatibility operation.
    """
    
    device_pool_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePoolArn') }})
    app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    configuration: Optional[ScheduleRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    test: Optional[ScheduleRunTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    test_type: Optional[TestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testType') }})
    
