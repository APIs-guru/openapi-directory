from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FrameMetric:
    r"""FrameMetric
     The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
    """
    
    frame_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameName') }})
    thread_states: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadStates') }})
    type: MetricTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
