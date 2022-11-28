from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateConnectionOAuthRequestParameters:
    r"""CreateConnectionOAuthRequestParameters
    Contains the OAuth authorization parameters to use for the connection.
    """
    
    authorization_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_parameters: CreateConnectionOAuthClientRequestParameters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientParameters') }})
    http_method: ConnectionOAuthHTTPMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    o_auth_http_parameters: Optional[ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthHttpParameters') }})
    
