from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimerDefinition:
    r"""TimerDefinition
    The new setting of a timer.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
