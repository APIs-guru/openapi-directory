from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentFramework:
    r"""AssessmentFramework
     The file used to structure and automate Audit Manager assessments for a given compliance standard. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    control_sets: Optional[List[AssessmentControlSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSets') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[FrameworkMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
