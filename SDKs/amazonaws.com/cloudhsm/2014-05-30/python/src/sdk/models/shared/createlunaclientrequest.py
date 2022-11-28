from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateLunaClientRequest:
    r"""CreateLunaClientRequest
    Contains the inputs for the <a>CreateLunaClient</a> action.
    """
    
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    
