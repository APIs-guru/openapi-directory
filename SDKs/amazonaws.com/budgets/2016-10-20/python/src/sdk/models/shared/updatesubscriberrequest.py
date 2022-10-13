from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import subscriber
from . import notification
from . import subscriber


@dataclass_json
@dataclass
class UpdateSubscriberRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    new_subscriber: subscriber.Subscriber = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewSubscriber' }})
    notification: notification.Notification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    old_subscriber: subscriber.Subscriber = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OldSubscriber' }})
    
