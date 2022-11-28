from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Listener:
    r"""Listener
    Describes the properties of a Listener for the LoadBalancer.
    """
    
    port: Optional[int] = field(default=None)
    protocol: Optional[str] = field(default=None)
    
