from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import functionexecutionconfig
from . import resourceaccesspolicy


@dataclass_json
@dataclass
class FunctionConfigurationEnvironment:
    access_sysfs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessSysfs' }})
    execution: Optional[functionexecutionconfig.FunctionExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Execution' }})
    resource_access_policies: Optional[List[resourceaccesspolicy.ResourceAccessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceAccessPolicies' }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variables' }})
    
