from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceInsightHealth:
    r"""ServiceInsightHealth
    Contains the number of open proactive and reactive insights in an analyzed AWS service.
    """
    
    open_proactive_insights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenProactiveInsights') }})
    open_reactive_insights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenReactiveInsights') }})
    
