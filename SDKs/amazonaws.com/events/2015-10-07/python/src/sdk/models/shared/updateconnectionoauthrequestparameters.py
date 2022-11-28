from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateConnectionOAuthRequestParameters:
    r"""UpdateConnectionOAuthRequestParameters
    Contains the OAuth request parameters to use for the connection.
    """
    
    authorization_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_parameters: Optional[UpdateConnectionOAuthClientRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientParameters') }})
    http_method: Optional[ConnectionOAuthHTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    o_auth_http_parameters: Optional[ConnectionHTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthHttpParameters') }})
    
