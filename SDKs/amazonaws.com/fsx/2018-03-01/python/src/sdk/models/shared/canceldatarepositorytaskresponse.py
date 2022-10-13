from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datarepositorytasklifecycle_enum


@dataclass_json
@dataclass
class CancelDataRepositoryTaskResponse:
    lifecycle: Optional[datarepositorytasklifecycle_enum.DataRepositoryTaskLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lifecycle' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskId' }})
    
