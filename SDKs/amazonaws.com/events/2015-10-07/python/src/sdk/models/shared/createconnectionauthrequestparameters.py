from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateConnectionAuthRequestParameters:
    r"""CreateConnectionAuthRequestParameters
    Contains the authorization parameters for the connection.
    """
    
    api_key_auth_parameters: Optional[CreateConnectionAPIKeyAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyAuthParameters') }})
    basic_auth_parameters: Optional[CreateConnectionBasicAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthParameters') }})
    invocation_http_parameters: Optional[ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationHttpParameters') }})
    o_auth_parameters: Optional[CreateConnectionOAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthParameters') }})
    
