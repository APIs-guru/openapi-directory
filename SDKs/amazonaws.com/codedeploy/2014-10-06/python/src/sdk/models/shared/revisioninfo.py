from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevisionInfo:
    r"""RevisionInfo
    Information about an application revision.
    """
    
    generic_revision_info: Optional[GenericRevisionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericRevisionInfo') }})
    revision_location: Optional[RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionLocation') }})
    
