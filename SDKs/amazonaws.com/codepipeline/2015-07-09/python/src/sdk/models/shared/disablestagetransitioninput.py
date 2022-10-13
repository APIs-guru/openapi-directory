from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import stagetransitiontype_enum


@dataclass_json
@dataclass
class DisableStageTransitionInput:
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    stage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    transition_type: stagetransitiontype_enum.StageTransitionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionType' }})
    
