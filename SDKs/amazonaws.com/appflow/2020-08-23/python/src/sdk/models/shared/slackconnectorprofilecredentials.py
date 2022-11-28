from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlackConnectorProfileCredentials:
    r"""SlackConnectorProfileCredentials
     The connector-specific profile credentials required when using Slack. 
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    o_auth_request: Optional[ConnectorOAuthRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthRequest') }})
    
