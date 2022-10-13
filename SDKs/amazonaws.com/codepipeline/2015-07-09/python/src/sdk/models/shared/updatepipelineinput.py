from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import pipelinedeclaration


@dataclass_json
@dataclass
class UpdatePipelineInput:
    pipeline: pipelinedeclaration.PipelineDeclaration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    
