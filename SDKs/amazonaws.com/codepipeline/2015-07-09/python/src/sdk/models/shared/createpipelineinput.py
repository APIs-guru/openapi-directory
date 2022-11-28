from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePipelineInput:
    r"""CreatePipelineInput
    Represents the input of a <code>CreatePipeline</code> action.
    """
    
    pipeline: PipelineDeclaration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
