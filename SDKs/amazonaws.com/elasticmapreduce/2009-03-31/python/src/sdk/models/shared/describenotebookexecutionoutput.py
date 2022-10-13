from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notebookexecution


@dataclass_json
@dataclass
class DescribeNotebookExecutionOutput:
    notebook_execution: Optional[notebookexecution.NotebookExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecution' }})
    
