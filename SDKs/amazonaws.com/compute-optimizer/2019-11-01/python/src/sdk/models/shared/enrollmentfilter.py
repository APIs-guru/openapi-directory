from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnrollmentFilter:
    r"""EnrollmentFilter
    Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.
    """
    
    name: Optional[EnrollmentFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
