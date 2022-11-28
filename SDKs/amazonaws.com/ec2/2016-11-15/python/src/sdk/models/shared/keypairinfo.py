from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class KeyPairInfo:
    r"""KeyPairInfo
    Describes a key pair.
    """
    
    key_fingerprint: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    key_pair_id: Optional[str] = field(default=None)
    key_type: Optional[KeyTypeEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
