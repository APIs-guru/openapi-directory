from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GameSessionQueue:
    r"""GameSessionQueue
    <p>Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSessionQueue</a> | <a>DescribeGameSessionQueues</a> | <a>UpdateGameSessionQueue</a> </p>
    """
    
    custom_event_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEventData') }})
    destinations: Optional[List[GameSessionQueueDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    filter_configuration: Optional[FilterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterConfiguration') }})
    game_session_queue_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueueArn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    notification_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTarget') }})
    player_latency_policies: Optional[List[PlayerLatencyPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerLatencyPolicies') }})
    priority_configuration: Optional[PriorityConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PriorityConfiguration') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInSeconds') }})
    
