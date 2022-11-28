from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentControlSet:
    r"""AssessmentControlSet
     Represents a set of controls in an Audit Manager assessment. 
    """
    
    controls: Optional[List[AssessmentControl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    delegations: Optional[List[Delegation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    manual_evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualEvidenceCount') }})
    roles: Optional[List[Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    status: Optional[ControlSetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    system_evidence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemEvidenceCount') }})
    
