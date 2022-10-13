from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createreplicaaction
from . import deletereplicaaction


@dataclass_json
@dataclass
class ReplicaUpdate:
    create: Optional[createreplicaaction.CreateReplicaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Create' }})
    delete: Optional[deletereplicaaction.DeleteReplicaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delete' }})
    
