from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ActiveTrustedKeyGroups:
    r"""ActiveTrustedKeyGroups
    A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = field()
    quantity: int = field()
    items: Optional[List[KgKeyPairIds]] = field(default=None)
    
