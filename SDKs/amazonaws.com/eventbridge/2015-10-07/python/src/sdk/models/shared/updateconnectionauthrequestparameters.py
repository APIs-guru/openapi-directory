from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updateconnectionapikeyauthrequestparameters
from . import updateconnectionbasicauthrequestparameters
from . import connectionhttpparameters
from . import updateconnectionoauthrequestparameters


@dataclass_json
@dataclass
class UpdateConnectionAuthRequestParameters:
    api_key_auth_parameters: Optional[updateconnectionapikeyauthrequestparameters.UpdateConnectionAPIKeyAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyAuthParameters' }})
    basic_auth_parameters: Optional[updateconnectionbasicauthrequestparameters.UpdateConnectionBasicAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BasicAuthParameters' }})
    invocation_http_parameters: Optional[connectionhttpparameters.ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationHttpParameters' }})
    o_auth_parameters: Optional[updateconnectionoauthrequestparameters.UpdateConnectionOAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuthParameters' }})
    
