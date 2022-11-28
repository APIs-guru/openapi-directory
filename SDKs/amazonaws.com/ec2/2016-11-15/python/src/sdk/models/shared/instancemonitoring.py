from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class InstanceMonitoring:
    r"""InstanceMonitoring
    Describes the monitoring of an instance.
    """
    
    instance_id: Optional[str] = field(default=None)
    monitoring: Optional[Monitoring] = field(default=None)
    
