from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetBackendResponse:
    amplify_meta_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmplifyMetaConfig' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    app_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppName' }})
    backend_environment_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendEnvironmentList' }})
    backend_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendEnvironmentName' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    
