from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetTerminationProtectionInput:
    r"""SetTerminationProtectionInput
     The input argument to the <a>TerminationProtection</a> operation. 
    """
    
    job_flow_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowIds') }})
    termination_protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationProtected') }})
    
