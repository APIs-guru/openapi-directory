from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionOAuthResponseParameters:
    r"""ConnectionOAuthResponseParameters
    Contains the response parameters when OAuth is specified as the authorization type.
    """
    
    authorization_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_parameters: Optional[ConnectionOAuthClientResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientParameters') }})
    http_method: Optional[ConnectionOAuthHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    o_auth_http_parameters: Optional[ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthHttpParameters') }})
    
