from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class VCPUInfo:
    r"""VCPUInfo
    Describes the vCPU configurations for the instance type.
    """
    
    default_cores: Optional[int] = field(default=None)
    default_threads_per_core: Optional[int] = field(default=None)
    default_v_cpus: Optional[int] = field(default=None)
    valid_cores: Optional[List[int]] = field(default=None)
    valid_threads_per_core: Optional[List[int]] = field(default=None)
    
