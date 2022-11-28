from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DurationRange:
    r"""DurationRange
    This data type is used in the <a>AssessmentTemplateFilter</a> data type.
    """
    
    max_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSeconds') }})
    min_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSeconds') }})
    
