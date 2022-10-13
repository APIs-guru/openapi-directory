from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import credentials


@dataclass_json
@dataclass
class GetCredentialsForIdentityResponse:
    credentials: Optional[credentials.Credentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credentials' }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    
