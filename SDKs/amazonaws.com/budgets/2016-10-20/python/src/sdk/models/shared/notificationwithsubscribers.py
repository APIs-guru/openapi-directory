from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationWithSubscribers:
    r"""NotificationWithSubscribers
    A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
    """
    
    notification: Notification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    subscribers: List[Subscriber] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscribers') }})
    
