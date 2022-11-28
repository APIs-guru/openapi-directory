from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ServiceEndpoint:
    r"""ServiceEndpoint
    The endpoint to which service requests can be submitted.
    """
    
    endpoint: Optional[str] = field(default=None)
    
