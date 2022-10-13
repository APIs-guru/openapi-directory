from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import framemetric


@dataclass_json
@dataclass
class FrameMetricDatum:
    frame_metric: framemetric.FrameMetric = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameMetric' }})
    values: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
