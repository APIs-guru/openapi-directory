from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ElasticGpuSpecificationResponse:
    r"""ElasticGpuSpecificationResponse
    Describes an elastic GPU.
    """
    
    type: Optional[str] = field(default=None)
    
