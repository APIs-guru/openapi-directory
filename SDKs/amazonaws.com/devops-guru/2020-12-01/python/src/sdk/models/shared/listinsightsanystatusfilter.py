from dataclasses import dataclass, field
from typing import Any,Enum,List
from dataclasses_json import dataclass_json
from . import starttimerange
from . import insighttype_enum


@dataclass_json
@dataclass
class ListInsightsAnyStatusFilter:
    start_time_range: starttimerange.StartTimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimeRange' }})
    type: insighttype_enum.InsightTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
