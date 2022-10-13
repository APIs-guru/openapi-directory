from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import authorizationdata


@dataclass_json
@dataclass
class GetAuthorizationTokenResponse:
    authorization_data: Optional[authorizationdata.AuthorizationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationData' }})
    
