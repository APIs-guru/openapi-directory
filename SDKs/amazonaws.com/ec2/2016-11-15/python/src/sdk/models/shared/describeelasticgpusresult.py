from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeElasticGpusResult:
    elastic_gpu_set: Optional[List[ElasticGpus]] = field(default=None)
    max_results: Optional[int] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
