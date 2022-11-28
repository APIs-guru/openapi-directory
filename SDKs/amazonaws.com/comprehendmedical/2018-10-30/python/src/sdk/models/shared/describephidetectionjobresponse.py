from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePhiDetectionJobResponse:
    comprehend_medical_async_job_properties: Optional[ComprehendMedicalAsyncJobProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComprehendMedicalAsyncJobProperties') }})
    
