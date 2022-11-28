from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PricingDetail:
    r"""PricingDetail
    Describes a Reserved Instance offering.
    """
    
    count: Optional[int] = field(default=None)
    price: Optional[float] = field(default=None)
    
