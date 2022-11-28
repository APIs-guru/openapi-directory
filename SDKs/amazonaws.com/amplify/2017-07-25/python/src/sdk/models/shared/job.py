from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Job:
    r"""Job
     Describes an execution job for an Amplify app. 
    """
    
    steps: List[Step] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    summary: JobSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
