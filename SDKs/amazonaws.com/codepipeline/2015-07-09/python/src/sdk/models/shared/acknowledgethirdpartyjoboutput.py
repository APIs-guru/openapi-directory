from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcknowledgeThirdPartyJobOutput:
    r"""AcknowledgeThirdPartyJobOutput
    Represents the output of an AcknowledgeThirdPartyJob action.
    """
    
    status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
