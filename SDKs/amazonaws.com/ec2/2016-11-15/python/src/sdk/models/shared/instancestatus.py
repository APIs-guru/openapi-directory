from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InstanceStatus:
    r"""InstanceStatus
    Describes the status of an instance.
    """
    
    availability_zone: Optional[str] = field(default=None)
    events: Optional[List[InstanceStatusEvent]] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_state: Optional[InstanceState] = field(default=None)
    instance_status: Optional[InstanceStatusSummary] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    system_status: Optional[InstanceStatusSummary] = field(default=None)
    
