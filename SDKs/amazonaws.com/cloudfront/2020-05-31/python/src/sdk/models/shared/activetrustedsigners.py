from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ActiveTrustedSigners:
    r"""ActiveTrustedSigners
    A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = field()
    quantity: int = field()
    items: Optional[List[Signer]] = field(default=None)
    
