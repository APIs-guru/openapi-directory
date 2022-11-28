from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MemoryInfo:
    r"""MemoryInfo
    Describes the memory for the instance type.
    """
    
    size_in_mi_b: Optional[int] = field(default=None)
    
