from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CanarySettings:
    r"""CanarySettings
    Configuration settings of a canary deployment.
    """
    
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    percent_traffic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentTraffic') }})
    stage_variable_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageVariableOverrides') }})
    use_stage_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useStageCache') }})
    
