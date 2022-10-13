from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notification


@dataclass_json
@dataclass
class DescribeNotificationsForBudgetResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    notifications: Optional[List[notification.Notification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    
