from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MatchRange:
    r"""MatchRange
    An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
    """
    
    end: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
