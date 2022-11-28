from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApplicationMetrics:
    r"""ApplicationMetrics
    Application request metrics for an AWS Elastic Beanstalk environment.
    """
    
    duration: Optional[int] = field(default=None)
    latency: Optional[Latency] = field(default=None)
    request_count: Optional[int] = field(default=None)
    status_codes: Optional[StatusCodes] = field(default=None)
    
