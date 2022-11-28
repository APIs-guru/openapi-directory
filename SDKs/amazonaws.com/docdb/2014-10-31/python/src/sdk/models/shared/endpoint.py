from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Endpoint:
    r"""Endpoint
    Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
    """
    
    address: Optional[str] = field(default=None)
    hosted_zone_id: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    
