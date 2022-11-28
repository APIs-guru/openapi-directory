from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class TrustedKeyGroups:
    r"""TrustedKeyGroups
    A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = field()
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
