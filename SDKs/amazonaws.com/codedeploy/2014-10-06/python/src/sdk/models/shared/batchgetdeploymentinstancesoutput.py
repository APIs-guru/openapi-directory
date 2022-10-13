from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancesummary


@dataclass_json
@dataclass
class BatchGetDeploymentInstancesOutput:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    instances_summary: Optional[List[instancesummary.InstanceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instancesSummary' }})
    
