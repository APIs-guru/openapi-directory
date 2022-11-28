from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddJobFlowStepsOutput:
    r"""AddJobFlowStepsOutput
     The output for the <a>AddJobFlowSteps</a> operation. 
    """
    
    step_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepIds') }})
    
