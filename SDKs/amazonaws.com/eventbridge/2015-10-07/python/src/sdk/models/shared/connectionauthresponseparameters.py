from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionAuthResponseParameters:
    r"""ConnectionAuthResponseParameters
    Contains the authorization parameters to use for the connection.
    """
    
    api_key_auth_parameters: Optional[ConnectionAPIKeyAuthResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyAuthParameters') }})
    basic_auth_parameters: Optional[ConnectionBasicAuthResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthParameters') }})
    invocation_http_parameters: Optional[ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationHttpParameters') }})
    o_auth_parameters: Optional[ConnectionOAuthResponseParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthParameters') }})
    
