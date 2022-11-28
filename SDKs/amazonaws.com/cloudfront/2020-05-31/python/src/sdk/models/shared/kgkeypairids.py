from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class KgKeyPairIds:
    r"""KgKeyPairIds
    A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    key_group_id: Optional[str] = field(default=None)
    key_pair_ids: Optional[KeyPairIds] = field(default=None)
    
