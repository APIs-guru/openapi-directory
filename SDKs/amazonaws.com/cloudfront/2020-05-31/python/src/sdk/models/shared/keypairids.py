from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class KeyPairIds:
    r"""KeyPairIds
    A list of CloudFront key pair identifiers.
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
