from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AdditionalAttribute:
    r"""AdditionalAttribute
    Information about additional load balancer attributes.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
