from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notebookexecutionsummary


@dataclass_json
@dataclass
class ListNotebookExecutionsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    notebook_executions: Optional[List[notebookexecutionsummary.NotebookExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecutions' }})
    
