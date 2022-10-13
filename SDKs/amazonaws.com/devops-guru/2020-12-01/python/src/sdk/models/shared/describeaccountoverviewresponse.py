from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeAccountOverviewResponse:
    mean_time_to_recover_in_milliseconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeanTimeToRecoverInMilliseconds' }})
    proactive_insights: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProactiveInsights' }})
    reactive_insights: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReactiveInsights' }})
    
