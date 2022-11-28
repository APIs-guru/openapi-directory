from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Notification:
    r"""Notification
    <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
    """
    
    comparison_operator: ComparisonOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    notification_type: NotificationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    threshold: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    notification_state: Optional[NotificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationState') }})
    threshold_type: Optional[ThresholdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThresholdType') }})
    
