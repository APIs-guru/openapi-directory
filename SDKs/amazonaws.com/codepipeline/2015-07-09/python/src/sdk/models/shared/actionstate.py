from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actionrevision
from . import actionexecution


@dataclass_json
@dataclass
class ActionState:
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    current_revision: Optional[actionrevision.ActionRevision] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRevision' }})
    entity_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityUrl' }})
    latest_execution: Optional[actionexecution.ActionExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestExecution' }})
    revision_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionUrl' }})
    
