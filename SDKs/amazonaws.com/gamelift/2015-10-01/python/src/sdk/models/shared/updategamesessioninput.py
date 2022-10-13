from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import playersessioncreationpolicy_enum
from . import protectionpolicy_enum


@dataclass_json
@dataclass
class UpdateGameSessionInput:
    game_session_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPlayerSessionCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    player_session_creation_policy: Optional[playersessioncreationpolicy_enum.PlayerSessionCreationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSessionCreationPolicy' }})
    protection_policy: Optional[protectionpolicy_enum.ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectionPolicy' }})
    
