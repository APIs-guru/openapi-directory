from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackendAPIConflictResolution:
    r"""BackendAPIConflictResolution
    Describes the conflict resolution configuration for your data model configured in your Amplify project.
    """
    
    resolution_strategy: Optional[ResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolutionStrategy') }})
    
