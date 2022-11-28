from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImportKeyPairResult:
    key_fingerprint: Optional[str] = field(default=None)
    key_name: Optional[str] = field(default=None)
    key_pair_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
