from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InsightHealth:
    r"""InsightHealth
     Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. 
    """
    
    mean_time_to_recover_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeanTimeToRecoverInMilliseconds') }})
    open_proactive_insights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenProactiveInsights') }})
    open_reactive_insights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenReactiveInsights') }})
    
