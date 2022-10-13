from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import awsjobabortcriteriaabortaction_enum
from . import awsjobabortcriteriafailuretype_enum


@dataclass_json
@dataclass
class AwsJobAbortCriteria:
    action: awsjobabortcriteriaabortaction_enum.AwsJobAbortCriteriaAbortActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    failure_type: awsjobabortcriteriafailuretype_enum.AwsJobAbortCriteriaFailureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureType' }})
    min_number_of_executed_things: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNumberOfExecutedThings' }})
    threshold_percentage: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdPercentage' }})
    
