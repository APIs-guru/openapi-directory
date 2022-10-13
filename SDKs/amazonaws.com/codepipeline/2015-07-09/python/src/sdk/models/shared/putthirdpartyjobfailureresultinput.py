from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import failuredetails


@dataclass_json
@dataclass
class PutThirdPartyJobFailureResultInput:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    failure_details: failuredetails.FailureDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureDetails' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    
