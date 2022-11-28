from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetectMitigationActionsTaskTarget:
    r"""DetectMitigationActionsTaskTarget
     The target of a mitigation action task. 
    """
    
    behavior_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviorName') }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    violation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationIds') }})
    
