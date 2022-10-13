from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backendapiresourceconfig


@dataclass_json
@dataclass
class GetBackendAPIResponse:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    backend_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendEnvironmentName' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    resource_config: Optional[backendapiresourceconfig.BackendAPIResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceConfig' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceName' }})
    
