from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import generatedpolicyresult
from . import jobdetails


@dataclass_json
@dataclass
class GetGeneratedPolicyResponse:
    generated_policy_result: generatedpolicyresult.GeneratedPolicyResult = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedPolicyResult' }})
    job_details: jobdetails.JobDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDetails' }})
    
