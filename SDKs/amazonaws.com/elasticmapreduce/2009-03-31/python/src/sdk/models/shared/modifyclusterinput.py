from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyClusterInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    step_concurrency_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepConcurrencyLevel' }})
    
