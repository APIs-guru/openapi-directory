from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conflictdetectiontype_enum
from . import conflicthandlertype_enum
from . import lambdaconflicthandlerconfig


@dataclass_json
@dataclass
class SyncConfig:
    conflict_detection: Optional[conflictdetectiontype_enum.ConflictDetectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetection' }})
    conflict_handler: Optional[conflicthandlertype_enum.ConflictHandlerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictHandler' }})
    lambda_conflict_handler_config: Optional[lambdaconflicthandlerconfig.LambdaConflictHandlerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaConflictHandlerConfig' }})
    
