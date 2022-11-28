from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDeploymentConfigOutput:
    r"""CreateDeploymentConfigOutput
    Represents the output of a <code>CreateDeploymentConfig</code> operation.
    """
    
    deployment_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigId') }})
    
