from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import insighthealth


@dataclass_json
@dataclass
class CloudFormationHealth:
    insight: Optional[insighthealth.InsightHealth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Insight' }})
    stack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackName' }})
    
