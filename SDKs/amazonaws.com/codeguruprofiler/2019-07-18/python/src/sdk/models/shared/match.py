from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Match:
    r"""Match
    The part of a profile that contains a recommendation found during analysis.
    """
    
    frame_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameAddress') }})
    target_frames_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetFramesIndex') }})
    threshold_breach_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdBreachValue') }})
    
