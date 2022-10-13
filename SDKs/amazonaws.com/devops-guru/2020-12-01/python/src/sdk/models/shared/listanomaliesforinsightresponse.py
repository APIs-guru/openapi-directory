from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import proactiveanomalysummary
from . import reactiveanomalysummary


@dataclass_json
@dataclass
class ListAnomaliesForInsightResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    proactive_anomalies: Optional[List[proactiveanomalysummary.ProactiveAnomalySummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProactiveAnomalies' }})
    reactive_anomalies: Optional[List[reactiveanomalysummary.ReactiveAnomalySummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReactiveAnomalies' }})
    
