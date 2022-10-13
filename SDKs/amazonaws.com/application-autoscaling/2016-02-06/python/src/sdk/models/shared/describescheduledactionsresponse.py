from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scheduledaction


@dataclass_json
@dataclass
class DescribeScheduledActionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scheduled_actions: Optional[List[scheduledaction.ScheduledAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledActions' }})
    
