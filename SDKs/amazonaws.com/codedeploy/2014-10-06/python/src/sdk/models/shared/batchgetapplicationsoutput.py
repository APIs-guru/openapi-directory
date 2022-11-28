from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetApplicationsOutput:
    r"""BatchGetApplicationsOutput
    Represents the output of a <code>BatchGetApplications</code> operation.
    """
    
    applications_info: Optional[List[ApplicationInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationsInfo') }})
    
