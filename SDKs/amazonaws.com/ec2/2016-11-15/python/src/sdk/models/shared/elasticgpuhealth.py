from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ElasticGpuHealth:
    r"""ElasticGpuHealth
    Describes the status of an Elastic Graphics accelerator.
    """
    
    status: Optional[ElasticGpuStatusEnum] = field(default=None)
    
