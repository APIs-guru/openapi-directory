from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExpiredJobIDException:
    r"""ExpiredJobIDException
    Indicates that the specified job has expired out of the system.
    """
    
    message: Optional[str] = field(default=None)
    
