from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicauthcredentials
from . import oauthcredentials


@dataclass_json
@dataclass
class SapoDataConnectorProfileCredentials:
    basic_auth_credentials: Optional[basicauthcredentials.BasicAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    o_auth_credentials: Optional[oauthcredentials.OAuthCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oAuthCredentials' }})
    
