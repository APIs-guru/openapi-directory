from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IoTJobAbortConfig:
    r"""IoTJobAbortConfig
    Contains a list of criteria that define when and how to cancel a configuration deployment.
    """
    
    criteria_list: List[IoTJobAbortCriteria] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteriaList') }})
    
