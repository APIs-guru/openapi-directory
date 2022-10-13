from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schedulerunconfiguration
from . import deviceselectionconfiguration
from . import executionconfiguration
from . import scheduleruntest


@dataclass_json
@dataclass
class ScheduleRunRequest:
    app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appArn' }})
    configuration: Optional[schedulerunconfiguration.ScheduleRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    device_pool_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePoolArn' }})
    device_selection_configuration: Optional[deviceselectionconfiguration.DeviceSelectionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceSelectionConfiguration' }})
    execution_configuration: Optional[executionconfiguration.ExecutionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    test: scheduleruntest.ScheduleRunTest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    
