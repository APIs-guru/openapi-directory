from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipeline


@dataclass_json
@dataclass
class UpdatePipelineNotificationsResponse:
    pipeline: Optional[pipeline.Pipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pipeline' }})
    
