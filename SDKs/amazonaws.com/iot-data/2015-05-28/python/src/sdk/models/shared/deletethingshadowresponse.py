from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteThingShadowResponse:
    r"""DeleteThingShadowResponse
    The output from the DeleteThingShadow operation.
    """
    
    payload: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
