from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBudgetRequest:
    r"""CreateBudgetRequest
     Request of CreateBudget 
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget: Budget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budget') }})
    notifications_with_subscribers: Optional[List[NotificationWithSubscribers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationsWithSubscribers') }})
    
