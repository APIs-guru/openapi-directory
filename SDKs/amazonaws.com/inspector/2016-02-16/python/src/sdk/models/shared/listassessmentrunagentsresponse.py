from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assessmentrunagent


@dataclass_json
@dataclass
class ListAssessmentRunAgentsResponse:
    assessment_run_agents: List[assessmentrunagent.AssessmentRunAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunAgents' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
