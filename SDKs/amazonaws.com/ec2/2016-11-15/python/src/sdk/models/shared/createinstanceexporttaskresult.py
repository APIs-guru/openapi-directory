from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateInstanceExportTaskResult:
    export_task: Optional[ExportTask] = field(default=None)
    
