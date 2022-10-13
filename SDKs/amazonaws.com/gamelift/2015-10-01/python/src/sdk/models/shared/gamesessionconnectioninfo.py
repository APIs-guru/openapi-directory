from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchedplayersession


@dataclass_json
@dataclass
class GameSessionConnectionInfo:
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    game_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionArn' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    matched_player_sessions: Optional[List[matchedplayersession.MatchedPlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedPlayerSessions' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    
