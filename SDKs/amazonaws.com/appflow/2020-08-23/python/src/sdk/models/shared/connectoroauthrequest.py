from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectorOAuthRequest:
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authCode' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    
