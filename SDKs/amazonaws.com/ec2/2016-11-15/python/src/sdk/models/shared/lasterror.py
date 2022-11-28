from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LastError:
    r"""LastError
    The last error that occurred for a VPC endpoint.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
