from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMatchmakingConfigurationInput:
    r"""CreateMatchmakingConfigurationInput
    Represents the input for a request operation.
    """
    
    acceptance_required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptanceRequired') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    request_timeout_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestTimeoutSeconds') }})
    rule_set_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSetName') }})
    acceptance_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptanceTimeoutSeconds') }})
    additional_player_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalPlayerCount') }})
    backfill_mode: Optional[BackfillModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackfillMode') }})
    custom_event_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEventData') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    flex_match_mode: Optional[FlexMatchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlexMatchMode') }})
    game_properties: Optional[List[GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameProperties') }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionData') }})
    game_session_queue_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueueArns') }})
    notification_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTarget') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
