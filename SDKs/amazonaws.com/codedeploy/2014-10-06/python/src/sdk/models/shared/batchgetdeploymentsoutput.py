from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetDeploymentsOutput:
    r"""BatchGetDeploymentsOutput
     Represents the output of a <code>BatchGetDeployments</code> operation. 
    """
    
    deployments_info: Optional[List[DeploymentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentsInfo') }})
    
