from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobsOutput:
    r"""ListJobsOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    job_list: Optional[List[GlacierJobDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobList') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
