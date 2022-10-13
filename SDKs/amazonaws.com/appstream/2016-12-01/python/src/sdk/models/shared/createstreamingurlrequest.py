from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateStreamingURLRequest:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetName' }})
    session_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionContext' }})
    stack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackName' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validity' }})
    
