from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CPUUtilization:
    r"""CPUUtilization
    CPU utilization metrics for an instance.
    """
    
    io_wait: Optional[float] = field(default=None)
    irq: Optional[float] = field(default=None)
    idle: Optional[float] = field(default=None)
    nice: Optional[float] = field(default=None)
    privileged: Optional[float] = field(default=None)
    soft_irq: Optional[float] = field(default=None)
    system: Optional[float] = field(default=None)
    user: Optional[float] = field(default=None)
    
