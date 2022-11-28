from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Endpoint:
    r"""Endpoint
    Represents the information required for client programs to connect to a cache node.
    """
    
    address: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    
