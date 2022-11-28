from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DeleteQueuedReservedInstancesError:
    r"""DeleteQueuedReservedInstancesError
    Describes the error for a Reserved Instance whose queued purchase could not be deleted.
    """
    
    code: Optional[DeleteQueuedReservedInstancesErrorCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
