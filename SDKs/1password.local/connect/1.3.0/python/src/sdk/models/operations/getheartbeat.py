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
    content_type: str = field(default=None)
    get_heartbeat_200_text_plain_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
