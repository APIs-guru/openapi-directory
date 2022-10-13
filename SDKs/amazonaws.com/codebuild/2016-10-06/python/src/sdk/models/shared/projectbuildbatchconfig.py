from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchrestrictions


@dataclass_json
@dataclass
class ProjectBuildBatchConfig:
    combine_artifacts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combineArtifacts' }})
    restrictions: Optional[batchrestrictions.BatchRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    timeout_in_mins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMins' }})
    
