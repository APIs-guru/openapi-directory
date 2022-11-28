from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeAccountOverviewResponse:
    mean_time_to_recover_in_milliseconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeanTimeToRecoverInMilliseconds') }})
    proactive_insights: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveInsights') }})
    reactive_insights: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReactiveInsights') }})
    
