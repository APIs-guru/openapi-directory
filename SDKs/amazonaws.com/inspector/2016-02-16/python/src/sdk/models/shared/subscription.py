from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Subscription:
    r"""Subscription
    This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
    """
    
    event_subscriptions: List[EventSubscription] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSubscriptions') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicArn') }})
    
