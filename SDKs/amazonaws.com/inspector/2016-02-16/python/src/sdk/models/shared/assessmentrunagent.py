from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssessmentRunAgent:
    r"""AssessmentRunAgent
    Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
    """
    
    agent_health: AgentHealthEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealth') }})
    agent_health_code: AgentHealthCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealthCode') }})
    agent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    assessment_run_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunArn') }})
    telemetry_metadata: List[TelemetryMetadata] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryMetadata') }})
    agent_health_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealthDetails') }})
    auto_scaling_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroup') }})
    
