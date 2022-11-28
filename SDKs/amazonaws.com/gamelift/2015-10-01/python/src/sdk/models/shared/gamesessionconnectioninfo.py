from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GameSessionConnectionInfo:
    r"""GameSessionConnectionInfo
    Connection information for a new game session that is created in response to a <a>StartMatchmaking</a> request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.
    """
    
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    game_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionArn') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    matched_player_sessions: Optional[List[MatchedPlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedPlayerSessions') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    
