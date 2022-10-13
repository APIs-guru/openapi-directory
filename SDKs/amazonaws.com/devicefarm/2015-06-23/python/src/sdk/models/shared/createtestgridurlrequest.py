from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateTestGridURLRequest:
    expires_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresInSeconds' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    
