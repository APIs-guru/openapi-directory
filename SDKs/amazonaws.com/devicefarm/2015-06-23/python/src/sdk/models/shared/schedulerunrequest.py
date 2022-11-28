from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleRunRequest:
    r"""ScheduleRunRequest
    Represents a request to the schedule run operation.
    """
    
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    test: ScheduleRunTest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    configuration: Optional[ScheduleRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    device_pool_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePoolArn') }})
    device_selection_configuration: Optional[DeviceSelectionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSelectionConfiguration') }})
    execution_configuration: Optional[ExecutionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
