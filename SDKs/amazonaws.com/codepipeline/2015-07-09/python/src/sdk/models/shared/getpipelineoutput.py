from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPipelineOutput:
    r"""GetPipelineOutput
    Represents the output of a <code>GetPipeline</code> action.
    """
    
    metadata: Optional[PipelineMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pipeline: Optional[PipelineDeclaration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    
