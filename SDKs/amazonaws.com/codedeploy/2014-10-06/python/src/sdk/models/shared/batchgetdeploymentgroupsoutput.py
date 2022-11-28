from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetDeploymentGroupsOutput:
    r"""BatchGetDeploymentGroupsOutput
    Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
    """
    
    deployment_groups_info: Optional[List[DeploymentGroupInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupsInfo') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    
