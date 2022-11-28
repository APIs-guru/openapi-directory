from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartDeploymentResult:
    r"""StartDeploymentResult
     The result structure for the start a deployment request. 
    """
    
    job_summary: JobSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobSummary') }})
    
