from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import proactiveinsight
from . import reactiveinsight


@dataclass_json
@dataclass
class DescribeInsightResponse:
    proactive_insight: Optional[proactiveinsight.ProactiveInsight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProactiveInsight' }})
    reactive_insight: Optional[reactiveinsight.ReactiveInsight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReactiveInsight' }})
    
