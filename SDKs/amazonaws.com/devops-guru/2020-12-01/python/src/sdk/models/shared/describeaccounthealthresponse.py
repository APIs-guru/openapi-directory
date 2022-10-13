from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeAccountHealthResponse:
    metrics_analyzed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricsAnalyzed' }})
    open_proactive_insights: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenProactiveInsights' }})
    open_reactive_insights: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenReactiveInsights' }})
    resource_hours: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceHours' }})
    
