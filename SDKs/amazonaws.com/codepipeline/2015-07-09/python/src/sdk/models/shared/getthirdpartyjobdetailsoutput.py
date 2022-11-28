from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetThirdPartyJobDetailsOutput:
    r"""GetThirdPartyJobDetailsOutput
    Represents the output of a <code>GetThirdPartyJobDetails</code> action.
    """
    
    job_details: Optional[ThirdPartyJobDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    
