from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FrameMetricDatum:
    r"""FrameMetricDatum
     Information about a frame metric and its values. 
    """
    
    frame_metric: FrameMetric = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameMetric') }})
    values: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
