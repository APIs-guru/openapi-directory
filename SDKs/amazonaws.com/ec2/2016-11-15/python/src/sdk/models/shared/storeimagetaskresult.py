from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class StoreImageTaskResult:
    r"""StoreImageTaskResult
    The information about the AMI store task, including the progress of the task.
    """
    
    ami_id: Optional[str] = field(default=None)
    bucket: Optional[str] = field(default=None)
    progress_percentage: Optional[int] = field(default=None)
    s3object_key: Optional[str] = field(default=None)
    store_task_failure_reason: Optional[str] = field(default=None)
    store_task_state: Optional[str] = field(default=None)
    task_start_time: Optional[datetime] = field(default=None)
    
