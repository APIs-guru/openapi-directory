from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ConversionTask:
    r"""ConversionTask
    Describes a conversion task.
    """
    
    conversion_task_id: Optional[str] = field(default=None)
    expiration_time: Optional[str] = field(default=None)
    import_instance: Optional[ImportInstanceTaskDetails] = field(default=None)
    import_volume: Optional[ImportVolumeTaskDetails] = field(default=None)
    state: Optional[ConversionTaskStateEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
