from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetDeploymentGroupInput:
    r"""GetDeploymentGroupInput
    Represents the input of a <code>GetDeploymentGroup</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    deployment_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    
