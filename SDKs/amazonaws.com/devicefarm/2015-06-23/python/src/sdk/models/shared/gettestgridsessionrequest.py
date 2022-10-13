from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTestGridSessionRequest:
    project_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionArn' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    
