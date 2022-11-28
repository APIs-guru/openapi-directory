from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class KeystoreInfo:
    aliases: Optional[List[KeystoreItems]] = field(default=None)
    exists: Optional[bool] = field(default=None)
    
