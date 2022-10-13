from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logsubscription


@dataclass_json
@dataclass
class ListLogSubscriptionsResult:
    log_subscriptions: Optional[List[logsubscription.LogSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogSubscriptions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
