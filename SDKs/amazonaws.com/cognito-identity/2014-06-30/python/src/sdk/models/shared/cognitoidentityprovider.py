from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CognitoIdentityProvider:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    server_side_token_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideTokenCheck' }})
    
