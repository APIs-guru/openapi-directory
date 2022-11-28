from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Monitoring:
    r"""Monitoring
    Describes the monitoring of an instance.
    """
    
    state: Optional[MonitoringStateEnum] = field(default=None)
    
