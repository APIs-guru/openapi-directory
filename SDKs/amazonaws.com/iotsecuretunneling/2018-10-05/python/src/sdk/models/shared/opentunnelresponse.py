from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OpenTunnelResponse:
    destination_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationAccessToken' }})
    source_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAccessToken' }})
    tunnel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelArn' }})
    tunnel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelId' }})
    
