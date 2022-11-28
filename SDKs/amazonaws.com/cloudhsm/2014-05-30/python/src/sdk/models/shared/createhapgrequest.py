from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateHapgRequest:
    r"""CreateHapgRequest
    Contains the inputs for the <a>CreateHapgRequest</a> action.
    """
    
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    
