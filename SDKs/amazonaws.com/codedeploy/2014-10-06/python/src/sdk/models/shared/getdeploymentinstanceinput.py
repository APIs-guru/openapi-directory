from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetDeploymentInstanceInput:
    r"""GetDeploymentInstanceInput
     Represents the input of a <code>GetDeploymentInstance</code> operation. 
    """
    
    deployment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    
