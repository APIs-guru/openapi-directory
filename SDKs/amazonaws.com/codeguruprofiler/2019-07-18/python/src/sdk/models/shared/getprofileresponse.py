from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetProfileResponse:
    profile: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    
