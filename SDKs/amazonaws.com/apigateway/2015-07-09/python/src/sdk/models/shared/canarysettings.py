from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CanarySettings:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    percent_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentTraffic' }})
    stage_variable_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageVariableOverrides' }})
    use_stage_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useStageCache' }})
    
