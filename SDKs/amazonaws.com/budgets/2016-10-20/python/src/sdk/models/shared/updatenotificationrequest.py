from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import notification
from . import notification


@dataclass_json
@dataclass
class UpdateNotificationRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    new_notification: notification.Notification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewNotification' }})
    old_notification: notification.Notification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OldNotification' }})
    
