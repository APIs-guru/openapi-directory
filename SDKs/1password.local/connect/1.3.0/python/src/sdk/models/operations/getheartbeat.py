from dataclasses import dataclass, field
from typing import Optional


GET_HEARTBEAT_SERVERS = [
	"http://localhost:8080",
]


@dataclass
class GetHeartbeatRequest:
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetHeartbeatResponse:
    content_type: str = field()
    status_code: int = field()
    get_heartbeat_200_text_plain_string: Optional[str] = field(default=None)
    
