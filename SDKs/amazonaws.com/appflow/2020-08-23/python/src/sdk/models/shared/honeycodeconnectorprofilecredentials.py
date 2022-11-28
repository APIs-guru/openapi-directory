from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HoneycodeConnectorProfileCredentials:
    r"""HoneycodeConnectorProfileCredentials
     The connector-specific credentials required when using Amazon Honeycode. 
    """
    
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    o_auth_request: Optional[ConnectorOAuthRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthRequest') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    
