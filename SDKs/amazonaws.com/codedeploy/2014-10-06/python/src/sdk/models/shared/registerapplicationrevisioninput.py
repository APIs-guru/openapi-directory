from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterApplicationRevisionInput:
    r"""RegisterApplicationRevisionInput
    Represents the input of a RegisterApplicationRevision operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revision: RevisionLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
