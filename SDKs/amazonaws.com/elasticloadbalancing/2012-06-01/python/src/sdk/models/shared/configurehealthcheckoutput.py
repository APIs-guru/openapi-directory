from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ConfigureHealthCheckOutput:
    r"""ConfigureHealthCheckOutput
    Contains the output of ConfigureHealthCheck.
    """
    
    health_check: Optional[HealthCheck] = field(default=None)
    
