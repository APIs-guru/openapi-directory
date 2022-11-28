from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IoTJobAbortCriteria:
    r"""IoTJobAbortCriteria
    <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
    """
    
    action: IoTJobAbortActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    failure_type: IoTJobExecutionFailureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureType') }})
    min_number_of_executed_things: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNumberOfExecutedThings') }})
    threshold_percentage: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdPercentage') }})
    
