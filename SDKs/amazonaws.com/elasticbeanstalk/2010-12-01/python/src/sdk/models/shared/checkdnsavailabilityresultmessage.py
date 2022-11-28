from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CheckDNSAvailabilityResultMessage:
    r"""CheckDNSAvailabilityResultMessage
    Indicates if the specified CNAME is available.
    """
    
    available: Optional[bool] = field(default=None)
    fully_qualified_cname: Optional[str] = field(default=None)
    
