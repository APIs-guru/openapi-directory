from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancesummary


@dataclass_json
@dataclass
class GetDeploymentInstanceOutput:
    instance_summary: Optional[instancesummary.InstanceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSummary' }})
    
