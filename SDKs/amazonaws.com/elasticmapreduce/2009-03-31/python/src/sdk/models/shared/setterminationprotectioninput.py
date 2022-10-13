from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetTerminationProtectionInput:
    job_flow_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowIds' }})
    termination_protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationProtected' }})
    
