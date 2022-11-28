from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
     A budget action resource. 
    """
    
    action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionId') }})
    action_threshold: ActionThreshold = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThreshold') }})
    action_type: ActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    approval_model: ApprovalModelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalModel') }})
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    definition: Definition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    execution_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    notification_type: NotificationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    status: ActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subscribers: List[Subscriber] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    
