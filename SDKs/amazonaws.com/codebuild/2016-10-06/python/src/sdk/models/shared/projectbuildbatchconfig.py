from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectBuildBatchConfig:
    r"""ProjectBuildBatchConfig
    Contains configuration information about a batch build project.
    """
    
    combine_artifacts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combineArtifacts') }})
    restrictions: Optional[BatchRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    timeout_in_mins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMins') }})
    
