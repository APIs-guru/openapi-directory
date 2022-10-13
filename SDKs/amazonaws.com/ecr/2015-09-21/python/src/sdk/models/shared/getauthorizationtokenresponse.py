from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizationdata


@dataclass_json
@dataclass
class GetAuthorizationTokenResponse:
    authorization_data: Optional[List[authorizationdata.AuthorizationData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationData' }})
    
