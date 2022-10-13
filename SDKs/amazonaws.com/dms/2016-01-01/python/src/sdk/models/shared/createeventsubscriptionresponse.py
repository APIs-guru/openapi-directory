from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventsubscription


@dataclass_json
@dataclass
class CreateEventSubscriptionResponse:
    event_subscription: Optional[eventsubscription.EventSubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSubscription' }})
    
