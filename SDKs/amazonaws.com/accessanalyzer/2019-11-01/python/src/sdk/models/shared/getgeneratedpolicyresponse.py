from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetGeneratedPolicyResponse:
    generated_policy_result: GeneratedPolicyResult = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedPolicyResult') }})
    job_details: JobDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    
