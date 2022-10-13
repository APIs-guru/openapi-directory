from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateProjectResult:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    project_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectTemplateId' }})
    
