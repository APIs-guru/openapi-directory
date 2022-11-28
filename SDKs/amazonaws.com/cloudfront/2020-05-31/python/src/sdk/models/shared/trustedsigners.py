from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TrustedSigners:
    r"""TrustedSigners
    A list of accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = field()
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
