from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateTokenResponse:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    challenge_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeCode' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionId' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ttl' }})
    
