from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PeeringTgwInfo:
    r"""PeeringTgwInfo
    Information about the transit gateway in the peering attachment.
    """
    
    owner_id: Optional[str] = field(default=None)
    region: Optional[str] = field(default=None)
    transit_gateway_id: Optional[str] = field(default=None)
    
