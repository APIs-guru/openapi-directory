from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class GetServiceLinkedRoleDeletionStatusResponse:
    status: DeletionTaskStatusTypeEnum = field()
    reason: Optional[DeletionTaskFailureReasonType] = field(default=None)
    
