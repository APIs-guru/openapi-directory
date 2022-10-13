from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipeline
from . import warning


@dataclass_json
@dataclass
class CreatePipelineResponse:
    pipeline: Optional[pipeline.Pipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pipeline' }})
    warnings: Optional[List[warning.Warning]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Warnings' }})
    
