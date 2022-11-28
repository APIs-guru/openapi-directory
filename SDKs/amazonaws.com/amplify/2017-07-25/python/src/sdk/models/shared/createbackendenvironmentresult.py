from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendEnvironmentResult:
    r"""CreateBackendEnvironmentResult
     The result structure for the create backend environment request. 
    """
    
    backend_environment: BackendEnvironment = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironment') }})
    
