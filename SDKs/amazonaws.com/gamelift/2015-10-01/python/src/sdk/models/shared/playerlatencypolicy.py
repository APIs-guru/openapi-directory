from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayerLatencyPolicy:
    r"""PlayerLatencyPolicy
    <p>Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time. </p> <p>Latency policies are part of a <a>GameSessionQueue</a>.</p>
    """
    
    maximum_individual_player_latency_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumIndividualPlayerLatencyMilliseconds') }})
    policy_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyDurationSeconds') }})
    
