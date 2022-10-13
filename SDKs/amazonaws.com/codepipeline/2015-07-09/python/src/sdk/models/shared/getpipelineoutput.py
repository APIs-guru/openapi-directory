from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelinemetadata
from . import pipelinedeclaration


@dataclass_json
@dataclass
class GetPipelineOutput:
    metadata: Optional[pipelinemetadata.PipelineMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pipeline: Optional[pipelinedeclaration.PipelineDeclaration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    
