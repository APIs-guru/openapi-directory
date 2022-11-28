from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateConnectionAuthRequestParameters:
    r"""UpdateConnectionAuthRequestParameters
    Contains the additional parameters to use for the connection.
    """
    
    api_key_auth_parameters: Optional[UpdateConnectionAPIKeyAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyAuthParameters') }})
    basic_auth_parameters: Optional[UpdateConnectionBasicAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthParameters') }})
    invocation_http_parameters: Optional[ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationHttpParameters') }})
    o_auth_parameters: Optional[UpdateConnectionOAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthParameters') }})
    
