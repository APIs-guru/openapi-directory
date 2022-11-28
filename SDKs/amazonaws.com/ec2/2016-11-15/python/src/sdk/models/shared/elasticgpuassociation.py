from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ElasticGpuAssociation:
    r"""ElasticGpuAssociation
    Describes the association between an instance and an Elastic Graphics accelerator.
    """
    
    elastic_gpu_association_id: Optional[str] = field(default=None)
    elastic_gpu_association_state: Optional[str] = field(default=None)
    elastic_gpu_association_time: Optional[str] = field(default=None)
    elastic_gpu_id: Optional[str] = field(default=None)
    
