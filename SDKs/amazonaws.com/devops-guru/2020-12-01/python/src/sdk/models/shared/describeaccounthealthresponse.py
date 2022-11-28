from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeAccountHealthResponse:
    metrics_analyzed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsAnalyzed') }})
    open_proactive_insights: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenProactiveInsights') }})
    open_reactive_insights: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenReactiveInsights') }})
    resource_hours: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceHours') }})
    
