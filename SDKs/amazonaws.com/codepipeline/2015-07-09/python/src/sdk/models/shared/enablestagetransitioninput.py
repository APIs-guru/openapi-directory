from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import stagetransitiontype_enum


@dataclass_json
@dataclass
class EnableStageTransitionInput:
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    stage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    transition_type: stagetransitiontype_enum.StageTransitionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionType' }})
    
