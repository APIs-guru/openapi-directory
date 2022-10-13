from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscription


@dataclass_json
@dataclass
class ListEventSubscriptionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    subscriptions: List[subscription.Subscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    
