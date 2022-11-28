from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetApplicationRevisionOutput:
    r"""GetApplicationRevisionOutput
    Represents the output of a <code>GetApplicationRevision</code> operation.
    """
    
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revision: Optional[RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    revision_info: Optional[GenericRevisionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionInfo') }})
    
