from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class InstanceStatusSummary:
    r"""InstanceStatusSummary
    Describes the status of an instance.
    """
    
    details: Optional[List[InstanceStatusDetails]] = field(default=None)
    status: Optional[SummaryStatusEnum] = field(default=None)
    
