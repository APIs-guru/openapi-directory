from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actionthreshold
from . import approvalmodel_enum
from . import definition
from . import notificationtype_enum
from . import subscriber


@dataclass_json
@dataclass
class UpdateBudgetActionRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionId' }})
    action_threshold: Optional[actionthreshold.ActionThreshold] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionThreshold' }})
    approval_model: Optional[approvalmodel_enum.ApprovalModelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalModel' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    definition: Optional[definition.Definition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    notification_type: Optional[notificationtype_enum.NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationType' }})
    subscribers: Optional[List[subscriber.Subscriber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscribers' }})
    
