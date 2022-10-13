from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import iotjobabortaction_enum
from . import iotjobexecutionfailuretype_enum


@dataclass_json
@dataclass
class IoTJobAbortCriteria:
    action: iotjobabortaction_enum.IoTJobAbortActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    failure_type: iotjobexecutionfailuretype_enum.IoTJobExecutionFailureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureType' }})
    min_number_of_executed_things: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNumberOfExecutedThings' }})
    threshold_percentage: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdPercentage' }})
    
