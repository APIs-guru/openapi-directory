from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBudgetActionRequest:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionId') }})
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    action_threshold: Optional[ActionThreshold] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThreshold') }})
    approval_model: Optional[ApprovalModelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalModel') }})
    definition: Optional[Definition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    notification_type: Optional[NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    subscribers: Optional[List[Subscriber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    
