from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDeploymentGroupInput:
    r"""DeleteDeploymentGroupInput
    Represents the input of a <code>DeleteDeploymentGroup</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    deployment_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    
