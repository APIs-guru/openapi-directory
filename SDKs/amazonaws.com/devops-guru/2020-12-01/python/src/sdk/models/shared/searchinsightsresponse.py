from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import proactiveinsightsummary
from . import reactiveinsightsummary


@dataclass_json
@dataclass
class SearchInsightsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    proactive_insights: Optional[List[proactiveinsightsummary.ProactiveInsightSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProactiveInsights' }})
    reactive_insights: Optional[List[reactiveinsightsummary.ReactiveInsightSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReactiveInsights' }})
    
