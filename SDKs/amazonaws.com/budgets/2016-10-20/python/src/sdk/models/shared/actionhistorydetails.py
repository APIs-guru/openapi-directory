from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionHistoryDetails:
    r"""ActionHistoryDetails
     The description of details of the event. 
    """
    
    action: Action = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
