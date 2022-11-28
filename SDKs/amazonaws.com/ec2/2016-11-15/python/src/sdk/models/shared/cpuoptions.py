from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CPUOptions:
    r"""CPUOptions
    The CPU options for the instance.
    """
    
    core_count: Optional[int] = field(default=None)
    threads_per_core: Optional[int] = field(default=None)
    
