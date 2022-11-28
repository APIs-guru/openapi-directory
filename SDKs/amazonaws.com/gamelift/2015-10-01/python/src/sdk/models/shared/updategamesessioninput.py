from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateGameSessionInput:
    r"""UpdateGameSessionInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    player_session_creation_policy: Optional[PlayerSessionCreationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerSessionCreationPolicy') }})
    protection_policy: Optional[ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionPolicy') }})
    
