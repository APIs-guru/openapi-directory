from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateBackendAuthResponse:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    backend_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendEnvironmentName' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operation' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
