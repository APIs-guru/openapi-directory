from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import insightselector


@dataclass_json
@dataclass
class PutInsightSelectorsRequest:
    insight_selectors: List[insightselector.InsightSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightSelectors' }})
    trail_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrailName' }})
    
