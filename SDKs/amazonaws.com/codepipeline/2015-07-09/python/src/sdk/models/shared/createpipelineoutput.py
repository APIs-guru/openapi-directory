from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelinedeclaration
from . import tag


@dataclass_json
@dataclass
class CreatePipelineOutput:
    pipeline: Optional[pipelinedeclaration.PipelineDeclaration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipeline' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
