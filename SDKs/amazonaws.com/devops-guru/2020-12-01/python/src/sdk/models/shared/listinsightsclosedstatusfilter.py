from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import endtimerange
from . import insighttype_enum


@dataclass_json
@dataclass
class ListInsightsClosedStatusFilter:
    end_time_range: endtimerange.EndTimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimeRange' }})
    type: insighttype_enum.InsightTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
