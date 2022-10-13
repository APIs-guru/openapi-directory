from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import agenthealth_enum
from . import agenthealthcode_enum
from . import telemetrymetadata


@dataclass_json
@dataclass
class AssessmentRunAgent:
    agent_health: agenthealth_enum.AgentHealthEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHealth' }})
    agent_health_code: agenthealthcode_enum.AgentHealthCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHealthCode' }})
    agent_health_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHealthDetails' }})
    agent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentId' }})
    assessment_run_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunArn' }})
    auto_scaling_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroup' }})
    telemetry_metadata: List[telemetrymetadata.TelemetryMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telemetryMetadata' }})
    
