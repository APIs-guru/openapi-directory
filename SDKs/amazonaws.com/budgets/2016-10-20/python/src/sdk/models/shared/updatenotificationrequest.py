from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateNotificationRequest:
    r"""UpdateNotificationRequest
     Request of UpdateNotification 
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    budget_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BudgetName') }})
    new_notification: Notification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewNotification') }})
    old_notification: Notification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OldNotification') }})
    
