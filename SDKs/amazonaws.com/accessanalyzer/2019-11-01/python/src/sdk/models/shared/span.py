from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Span:
    r"""Span
    A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
    """
    
    end: Position = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Position = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
