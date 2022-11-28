from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CanceledJobIDException:
    r"""CanceledJobIDException
    The specified job ID has been canceled and is no longer valid.
    """
    
    message: Optional[str] = field(default=None)
    
