from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDeploymentOutput:
    r"""CreateDeploymentOutput
     Represents the output of a <code>CreateDeployment</code> operation. 
    """
    
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    
