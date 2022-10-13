from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datarepositorytask


@dataclass_json
@dataclass
class CreateDataRepositoryTaskResponse:
    data_repository_task: Optional[datarepositorytask.DataRepositoryTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRepositoryTask' }})
    
