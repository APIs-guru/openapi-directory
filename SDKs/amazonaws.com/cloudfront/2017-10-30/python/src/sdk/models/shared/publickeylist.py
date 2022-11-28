from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PublicKeyList:
    r"""PublicKeyList
    A list of public keys you've added to CloudFront to use with features like field-level encryption.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[PublicKeySummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
