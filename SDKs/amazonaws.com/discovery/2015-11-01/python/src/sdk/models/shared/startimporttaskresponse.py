from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import importtask


@dataclass_json
@dataclass
class StartImportTaskResponse:
    task: Optional[importtask.ImportTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
