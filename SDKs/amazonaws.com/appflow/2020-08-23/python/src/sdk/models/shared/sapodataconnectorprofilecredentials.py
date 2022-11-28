from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SapoDataConnectorProfileCredentials:
    r"""SapoDataConnectorProfileCredentials
     The connector-specific profile credentials required when using SAPOData. 
    """
    
    basic_auth_credentials: Optional[BasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    o_auth_credentials: Optional[OAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthCredentials') }})
    
