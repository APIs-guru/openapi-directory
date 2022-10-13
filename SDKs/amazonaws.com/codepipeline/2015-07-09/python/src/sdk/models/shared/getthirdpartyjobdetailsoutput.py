from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thirdpartyjobdetails


@dataclass_json
@dataclass
class GetThirdPartyJobDetailsOutput:
    job_details: Optional[thirdpartyjobdetails.ThirdPartyJobDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDetails' }})
    
