from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import credentials


@dataclass_json
@dataclass
class GetProgrammaticAccessCredentialsResponse:
    credentials: Optional[credentials.Credentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInMinutes' }})
    
