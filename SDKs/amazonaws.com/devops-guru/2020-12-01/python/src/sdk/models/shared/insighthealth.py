from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InsightHealth:
    mean_time_to_recover_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeanTimeToRecoverInMilliseconds' }})
    open_proactive_insights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenProactiveInsights' }})
    open_reactive_insights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenReactiveInsights' }})
    
