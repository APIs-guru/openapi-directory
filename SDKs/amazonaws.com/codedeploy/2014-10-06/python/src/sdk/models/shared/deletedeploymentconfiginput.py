from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDeploymentConfigInput:
    r"""DeleteDeploymentConfigInput
    Represents the input of a <code>DeleteDeploymentConfig</code> operation.
    """
    
    deployment_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    
