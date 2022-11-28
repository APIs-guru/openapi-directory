from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoJobActivity:
    r"""BuildSystemSharedDtoJobActivity
    A DTO for an IJobActivity
    """
    
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityID') }})
    job_activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobActivityID') }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobID') }})
    parameter_mappings: Optional[List[BuildSystemSharedDtoParameterMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterMappings') }})
    run_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunOrder') }})
    
