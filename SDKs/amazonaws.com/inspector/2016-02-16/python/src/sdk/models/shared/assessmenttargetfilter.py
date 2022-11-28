from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssessmentTargetFilter:
    r"""AssessmentTargetFilter
    Used as the request parameter in the <a>ListAssessmentTargets</a> action.
    """
    
    assessment_target_name_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetNamePattern') }})
    
