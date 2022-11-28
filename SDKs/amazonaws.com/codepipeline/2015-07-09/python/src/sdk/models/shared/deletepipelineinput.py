from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeletePipelineInput:
    r"""DeletePipelineInput
    Represents the input of a <code>DeletePipeline</code> action.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
