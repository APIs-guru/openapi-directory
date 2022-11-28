from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RealtimeContactAnalysisSegment:
    r"""RealtimeContactAnalysisSegment
    An analyzed segment for a real-time analysis session.
    """
    
    categories: Optional[Categories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    transcript: Optional[Transcript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    
