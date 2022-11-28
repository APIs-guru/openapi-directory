from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metric:
    r"""Metric
     Details about the metric that the analysis used when it detected the anomaly. The metric what is analyzed to create recommendations. It includes the name of the frame that was analyzed and the type and thread states used to derive the metric value for that frame. 
    """
    
    frame_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameName') }})
    thread_states: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadStates') }})
    type: MetricTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
