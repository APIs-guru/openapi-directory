from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ElasticGpus:
    r"""ElasticGpus
    Describes an Elastic Graphics accelerator.
    """
    
    availability_zone: Optional[str] = field(default=None)
    elastic_gpu_health: Optional[ElasticGpuHealth] = field(default=None)
    elastic_gpu_id: Optional[str] = field(default=None)
    elastic_gpu_state: Optional[ElasticGpuStateEnum] = field(default=None)
    elastic_gpu_type: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
