from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetOnPremisesInstanceOutput:
    r"""GetOnPremisesInstanceOutput
     Represents the output of a <code>GetOnPremisesInstance</code> operation. 
    """
    
    instance_info: Optional[InstanceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceInfo') }})
    
