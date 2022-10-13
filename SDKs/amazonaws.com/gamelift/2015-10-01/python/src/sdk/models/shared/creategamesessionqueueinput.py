from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gamesessionqueuedestination
from . import filterconfiguration
from . import playerlatencypolicy
from . import priorityconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateGameSessionQueueInput:
    custom_event_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomEventData' }})
    destinations: Optional[List[gamesessionqueuedestination.GameSessionQueueDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destinations' }})
    filter_configuration: Optional[filterconfiguration.FilterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notification_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationTarget' }})
    player_latency_policies: Optional[List[playerlatencypolicy.PlayerLatencyPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerLatencyPolicies' }})
    priority_configuration: Optional[priorityconfiguration.PriorityConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PriorityConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutInSeconds' }})
    
