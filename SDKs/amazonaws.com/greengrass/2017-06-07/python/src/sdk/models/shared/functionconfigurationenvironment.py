from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionConfigurationEnvironment:
    r"""FunctionConfigurationEnvironment
    The environment configuration of the function.
    """
    
    access_sysfs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessSysfs') }})
    execution: Optional[FunctionExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Execution') }})
    resource_access_policies: Optional[List[ResourceAccessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAccessPolicies') }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    
