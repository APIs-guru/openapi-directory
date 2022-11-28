from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CancelImportTaskResult:
    import_task_id: Optional[str] = field(default=None)
    previous_state: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    
