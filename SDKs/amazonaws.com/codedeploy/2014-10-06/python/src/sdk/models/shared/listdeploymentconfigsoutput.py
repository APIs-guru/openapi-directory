from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListDeploymentConfigsOutput:
    r"""ListDeploymentConfigsOutput
    Represents the output of a <code>ListDeploymentConfigs</code> operation.
    """
    
    deployment_configs_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigsList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
