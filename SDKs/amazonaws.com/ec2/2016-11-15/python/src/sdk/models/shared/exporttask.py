from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ExportTask:
    r"""ExportTask
    Describes an export instance task.
    """
    
    description: Optional[str] = field(default=None)
    export_task_id: Optional[str] = field(default=None)
    export_to_s3_task: Optional[ExportToS3Task] = field(default=None)
    instance_export_details: Optional[InstanceExportDetails] = field(default=None)
    state: Optional[ExportTaskStateEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
