from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backendenvironment


@dataclass_json
@dataclass
class ListBackendEnvironmentsResult:
    backend_environments: List[backendenvironment.BackendEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
