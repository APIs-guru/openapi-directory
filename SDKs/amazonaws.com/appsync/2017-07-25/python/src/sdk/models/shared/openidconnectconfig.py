from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OpenIDConnectConfig:
    auth_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authTTL' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    iat_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iatTTL' }})
    issuer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    
