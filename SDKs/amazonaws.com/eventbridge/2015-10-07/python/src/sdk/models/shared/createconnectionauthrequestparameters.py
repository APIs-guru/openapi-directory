from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createconnectionapikeyauthrequestparameters
from . import createconnectionbasicauthrequestparameters
from . import connectionhttpparameters
from . import createconnectionoauthrequestparameters


@dataclass_json
@dataclass
class CreateConnectionAuthRequestParameters:
    api_key_auth_parameters: Optional[createconnectionapikeyauthrequestparameters.CreateConnectionAPIKeyAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyAuthParameters' }})
    basic_auth_parameters: Optional[createconnectionbasicauthrequestparameters.CreateConnectionBasicAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BasicAuthParameters' }})
    invocation_http_parameters: Optional[connectionhttpparameters.ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationHttpParameters' }})
    o_auth_parameters: Optional[createconnectionoauthrequestparameters.CreateConnectionOAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuthParameters' }})
    
