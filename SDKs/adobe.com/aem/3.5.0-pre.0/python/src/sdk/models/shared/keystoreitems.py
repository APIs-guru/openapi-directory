from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class KeystoreItems:
    algorithm: Optional[str] = field(default=None)
    alias: Optional[str] = field(default=None)
    chain: Optional[List[KeystoreChainItems]] = field(default=None)
    entry_type: Optional[str] = field(default=None)
    format: Optional[str] = field(default=None)
    
