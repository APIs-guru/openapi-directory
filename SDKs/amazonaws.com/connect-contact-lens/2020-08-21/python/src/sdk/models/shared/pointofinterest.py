from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PointOfInterest:
    r"""PointOfInterest
    The section of the contact audio where that category rule was detected.
    """
    
    begin_offset_millis: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffsetMillis') }})
    end_offset_millis: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffsetMillis') }})
    
