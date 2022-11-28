from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyncConfig:
    r"""SyncConfig
    <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    """
    
    conflict_detection: Optional[ConflictDetectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetection') }})
    conflict_handler: Optional[ConflictHandlerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictHandler') }})
    lambda_conflict_handler_config: Optional[LambdaConflictHandlerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerConfig') }})
    
