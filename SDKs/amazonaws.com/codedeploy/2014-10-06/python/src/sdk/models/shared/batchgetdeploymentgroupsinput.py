from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetDeploymentGroupsInput:
    r"""BatchGetDeploymentGroupsInput
    Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    deployment_group_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupNames') }})
    
