from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CancelStepsOutput:
    r"""CancelStepsOutput
     The output for the <a>CancelSteps</a> operation. 
    """
    
    cancel_steps_info_list: Optional[List[CancelStepsInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CancelStepsInfoList') }})
    
