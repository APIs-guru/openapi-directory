from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schedulerunconfiguration
from . import scheduleruntest
from . import testtype_enum


@dataclass_json
@dataclass
class GetDevicePoolCompatibilityRequest:
    app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appArn' }})
    configuration: Optional[schedulerunconfiguration.ScheduleRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    device_pool_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePoolArn' }})
    test: Optional[scheduleruntest.ScheduleRunTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    test_type: Optional[testtype_enum.TestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testType' }})
    
