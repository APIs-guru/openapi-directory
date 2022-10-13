from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import backendenvironment


@dataclass_json
@dataclass
class CreateBackendEnvironmentResult:
    backend_environment: backendenvironment.BackendEnvironment = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironment' }})
    
