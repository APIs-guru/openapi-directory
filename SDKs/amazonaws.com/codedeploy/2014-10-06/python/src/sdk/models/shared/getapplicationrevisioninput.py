from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetApplicationRevisionInput:
    r"""GetApplicationRevisionInput
    Represents the input of a <code>GetApplicationRevision</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revision: RevisionLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
