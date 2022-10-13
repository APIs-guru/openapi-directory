from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscriber


@dataclass_json
@dataclass
class DescribeSubscribersForNotificationResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    subscribers: Optional[List[subscriber.Subscriber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscribers' }})
    
