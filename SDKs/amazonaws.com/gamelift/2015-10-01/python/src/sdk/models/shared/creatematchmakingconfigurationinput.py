from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backfillmode_enum
from . import flexmatchmode_enum
from . import gameproperty
from . import tag


@dataclass_json
@dataclass
class CreateMatchmakingConfigurationInput:
    acceptance_required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptanceRequired' }})
    acceptance_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptanceTimeoutSeconds' }})
    additional_player_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalPlayerCount' }})
    backfill_mode: Optional[backfillmode_enum.BackfillModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackfillMode' }})
    custom_event_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomEventData' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    flex_match_mode: Optional[flexmatchmode_enum.FlexMatchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlexMatchMode' }})
    game_properties: Optional[List[gameproperty.GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameProperties' }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionData' }})
    game_session_queue_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionQueueArns' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notification_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationTarget' }})
    request_timeout_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestTimeoutSeconds' }})
    rule_set_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSetName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
