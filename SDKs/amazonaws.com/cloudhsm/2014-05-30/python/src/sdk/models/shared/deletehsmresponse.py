from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteHsmResponse:
    r"""DeleteHsmResponse
    Contains the output of the <a>DeleteHsm</a> operation.
    """
    
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
