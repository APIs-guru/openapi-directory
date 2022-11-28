from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GameSessionDetail:
    r"""GameSessionDetail
    A game session's properties plus the protection policy currently in force.
    """
    
    game_session: Optional[GameSession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSession') }})
    protection_policy: Optional[ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionPolicy') }})
    
