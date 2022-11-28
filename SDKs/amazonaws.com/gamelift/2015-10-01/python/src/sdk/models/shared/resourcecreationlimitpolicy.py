from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceCreationLimitPolicy:
    r"""ResourceCreationLimitPolicy
    <p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p> <p>The resource creation limit policy is included in <a>FleetAttributes</a>.</p>
    """
    
    new_game_sessions_per_creator: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionsPerCreator') }})
    policy_period_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyPeriodInMinutes') }})
    
