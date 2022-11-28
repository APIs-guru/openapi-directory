from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeKeyPairsResult:
    key_pairs: Optional[List[KeyPairInfo]] = field(default=None)
    
