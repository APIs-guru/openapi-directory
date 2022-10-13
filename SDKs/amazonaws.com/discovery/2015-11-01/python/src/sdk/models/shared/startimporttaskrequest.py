from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartImportTaskRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    import_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importUrl' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
