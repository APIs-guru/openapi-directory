from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPipelineInput:
    r"""GetPipelineInput
    Represents the input of a <code>GetPipeline</code> action.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
