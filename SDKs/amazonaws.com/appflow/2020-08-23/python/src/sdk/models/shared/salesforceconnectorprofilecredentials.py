from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectoroauthrequest


@dataclass_json
@dataclass
class SalesforceConnectorProfileCredentials:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    client_credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCredentialsArn' }})
    o_auth_request: Optional[connectoroauthrequest.ConnectorOAuthRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oAuthRequest' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    
