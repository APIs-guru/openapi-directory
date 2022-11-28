from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGameSessionQueueInput:
    r"""CreateGameSessionQueueInput
    Represents the input for a request operation.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    custom_event_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEventData') }})
    destinations: Optional[List[GameSessionQueueDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    filter_configuration: Optional[FilterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterConfiguration') }})
    notification_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTarget') }})
    player_latency_policies: Optional[List[PlayerLatencyPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerLatencyPolicies') }})
    priority_configuration: Optional[PriorityConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PriorityConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInSeconds') }})
    
