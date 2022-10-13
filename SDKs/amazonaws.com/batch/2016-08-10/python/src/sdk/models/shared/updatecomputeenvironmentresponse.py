from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateComputeEnvironmentResponse:
    compute_environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentArn' }})
    compute_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentName' }})
    
