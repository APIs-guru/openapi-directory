from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeSubscribersForNotificationRequest:
    r"""DescribeSubscribersForNotificationRequest
     Request of DescribeSubscribersForNotification 
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    notification: Notification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
