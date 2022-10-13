from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscription


@dataclass_json
@dataclass
class SubscriptionDefinitionVersion:
    subscriptions: Optional[List[subscription.Subscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscriptions' }})
    
