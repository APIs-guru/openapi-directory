from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBackendEnvironmentsResult:
    r"""ListBackendEnvironmentsResult
     The result structure for the list backend environments result. 
    """
    
    backend_environments: List[BackendEnvironment] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironments') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
