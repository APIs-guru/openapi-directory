from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import notification
from . import subscriber


@dataclass_json
@dataclass
class CreateNotificationRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    notification: notification.Notification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    subscribers: List[subscriber.Subscriber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscribers' }})
    
