from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import actionthreshold
from . import actiontype_enum
from . import approvalmodel_enum
from . import definition
from . import notificationtype_enum
from . import subscriber


@dataclass_json
@dataclass
class CreateBudgetActionRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    action_threshold: actionthreshold.ActionThreshold = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionThreshold' }})
    action_type: actiontype_enum.ActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    approval_model: approvalmodel_enum.ApprovalModelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalModel' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    definition: definition.Definition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    notification_type: notificationtype_enum.NotificationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationType' }})
    subscribers: List[subscriber.Subscriber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscribers' }})
    
