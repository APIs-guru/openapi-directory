from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAssessmentResponse:
    assessment: Optional[Assessment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessment') }})
    user_role: Optional[Role] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRole') }})
    
