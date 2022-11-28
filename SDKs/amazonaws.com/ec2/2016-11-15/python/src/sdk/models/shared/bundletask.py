from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class BundleTask:
    r"""BundleTask
    Describes a bundle task.
    """
    
    bundle_id: Optional[str] = field(default=None)
    bundle_task_error: Optional[BundleTaskError] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    progress: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    state: Optional[BundleTaskStateEnum] = field(default=None)
    storage: Optional[Storage] = field(default=None)
    update_time: Optional[datetime] = field(default=None)
    
