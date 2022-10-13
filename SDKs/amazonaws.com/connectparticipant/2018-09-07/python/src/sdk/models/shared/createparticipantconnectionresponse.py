from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectioncredentials
from . import websocket


@dataclass_json
@dataclass
class CreateParticipantConnectionResponse:
    connection_credentials: Optional[connectioncredentials.ConnectionCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionCredentials' }})
    websocket: Optional[websocket.Websocket] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Websocket' }})
    
