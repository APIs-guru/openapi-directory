from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import actionrevision


@dataclass_json
@dataclass
class PutActionRevisionInput:
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    action_revision: actionrevision.ActionRevision = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionRevision' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    stage_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    
