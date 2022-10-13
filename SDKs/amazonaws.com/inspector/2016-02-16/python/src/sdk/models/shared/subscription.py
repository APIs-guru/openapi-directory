from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import eventsubscription


@dataclass_json
@dataclass
class Subscription:
    event_subscriptions: List[eventsubscription.EventSubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSubscriptions' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicArn' }})
    
