from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insightselector


@dataclass_json
@dataclass
class GetInsightSelectorsResponse:
    insight_selectors: Optional[List[insightselector.InsightSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightSelectors' }})
    trail_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrailARN' }})
    
