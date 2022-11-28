from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetDeploymentsInput:
    r"""BatchGetDeploymentsInput
     Represents the input of a <code>BatchGetDeployments</code> operation. 
    """
    
    deployment_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentIds') }})
    
