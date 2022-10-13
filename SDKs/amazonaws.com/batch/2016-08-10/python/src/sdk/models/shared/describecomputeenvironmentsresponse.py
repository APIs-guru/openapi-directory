from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import computeenvironmentdetail


@dataclass_json
@dataclass
class DescribeComputeEnvironmentsResponse:
    compute_environments: Optional[List[computeenvironmentdetail.ComputeEnvironmentDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
