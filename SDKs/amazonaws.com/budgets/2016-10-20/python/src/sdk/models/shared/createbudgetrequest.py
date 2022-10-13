from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budget
from . import notificationwithsubscribers


@dataclass_json
@dataclass
class CreateBudgetRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    budget: budget.Budget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Budget' }})
    notifications_with_subscribers: Optional[List[notificationwithsubscribers.NotificationWithSubscribers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationsWithSubscribers' }})
    
