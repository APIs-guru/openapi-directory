from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import abortaction_enum
from . import jobexecutionfailuretype_enum


@dataclass_json
@dataclass
class AbortCriteria:
    action: abortaction_enum.AbortActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    failure_type: jobexecutionfailuretype_enum.JobExecutionFailureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureType' }})
    min_number_of_executed_things: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNumberOfExecutedThings' }})
    threshold_percentage: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdPercentage' }})
    
