from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetShippingLabelOutput:
    shipping_label_url: Optional[str] = field(default=None)
    warning: Optional[str] = field(default=None)
    
