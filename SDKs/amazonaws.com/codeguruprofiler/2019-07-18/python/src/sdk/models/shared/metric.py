from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import metrictype_enum


@dataclass_json
@dataclass
class Metric:
    frame_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameName' }})
    thread_states: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadStates' }})
    type: metrictype_enum.MetricTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
