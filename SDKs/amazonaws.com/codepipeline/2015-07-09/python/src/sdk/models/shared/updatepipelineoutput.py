from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelinedeclaration


@dataclass_json
@dataclass
class UpdatePipelineOutput:
    pipeline: Optional[pipelinedeclaration.PipelineDeclaration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    
