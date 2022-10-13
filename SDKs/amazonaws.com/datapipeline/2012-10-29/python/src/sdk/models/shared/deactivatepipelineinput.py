from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeactivatePipelineInput:
    cancel_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelActive' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    
