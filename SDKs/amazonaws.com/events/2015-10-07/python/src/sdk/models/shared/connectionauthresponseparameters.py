from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectionapikeyauthresponseparameters
from . import connectionbasicauthresponseparameters
from . import connectionhttpparameters
from . import connectionoauthresponseparameters


@dataclass_json
@dataclass
class ConnectionAuthResponseParameters:
    api_key_auth_parameters: Optional[connectionapikeyauthresponseparameters.ConnectionAPIKeyAuthResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyAuthParameters' }})
    basic_auth_parameters: Optional[connectionbasicauthresponseparameters.ConnectionBasicAuthResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BasicAuthParameters' }})
    invocation_http_parameters: Optional[connectionhttpparameters.ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationHttpParameters' }})
    o_auth_parameters: Optional[connectionoauthresponseparameters.ConnectionOAuthResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuthParameters' }})
    
