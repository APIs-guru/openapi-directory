from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventsubscription


@dataclass_json
@dataclass
class DescribeEventSubscriptionsResponse:
    event_subscriptions_list: Optional[List[eventsubscription.EventSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSubscriptionsList' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
