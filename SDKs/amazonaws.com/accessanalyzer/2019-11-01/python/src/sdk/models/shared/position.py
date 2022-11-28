from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Position:
    r"""Position
    A position in a policy.
    """
    
    column: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    line: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
