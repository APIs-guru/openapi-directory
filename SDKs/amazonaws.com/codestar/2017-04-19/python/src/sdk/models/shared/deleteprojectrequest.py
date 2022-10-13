from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteProjectRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    delete_stack: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteStack' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
