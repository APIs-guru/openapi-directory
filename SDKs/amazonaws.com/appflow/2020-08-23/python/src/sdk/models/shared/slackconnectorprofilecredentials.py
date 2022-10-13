from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectoroauthrequest


@dataclass_json
@dataclass
class SlackConnectorProfileCredentials:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    o_auth_request: Optional[connectoroauthrequest.ConnectorOAuthRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oAuthRequest' }})
    
