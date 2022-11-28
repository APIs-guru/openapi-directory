from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentTemplateFilter:
    r"""AssessmentTemplateFilter
    Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
    """
    
    duration_range: Optional[DurationRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationRange') }})
    name_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePattern') }})
    rules_package_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    
