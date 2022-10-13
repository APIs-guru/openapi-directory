from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionoauthclientresponseparameters
from . import connectionoauthhttpmethod_enum
from . import connectionhttpparameters


@dataclass_json
@dataclass
class ConnectionOAuthResponseParameters:
    authorization_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationEndpoint' }})
    client_parameters: Optional[connectionoauthclientresponseparameters.ConnectionOAuthClientResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientParameters' }})
    http_method: Optional[connectionoauthhttpmethod_enum.ConnectionOAuthHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpMethod' }})
    o_auth_http_parameters: Optional[connectionhttpparameters.ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuthHttpParameters' }})
    
