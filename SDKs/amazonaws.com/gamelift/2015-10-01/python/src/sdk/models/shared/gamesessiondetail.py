from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gamesession
from . import protectionpolicy_enum


@dataclass_json
@dataclass
class GameSessionDetail:
    game_session: Optional[gamesession.GameSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSession' }})
    protection_policy: Optional[protectionpolicy_enum.ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionPolicy' }})
    
