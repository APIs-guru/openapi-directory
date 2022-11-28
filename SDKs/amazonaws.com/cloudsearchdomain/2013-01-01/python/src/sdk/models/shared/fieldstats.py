from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FieldStats:
    r"""FieldStats
    The statistics for a field calculated in the request.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    mean: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    missing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missing') }})
    stddev: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stddev') }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    sum_of_squares: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sumOfSquares') }})
    
