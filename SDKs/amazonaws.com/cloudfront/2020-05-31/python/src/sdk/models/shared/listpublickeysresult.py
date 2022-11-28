from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListPublicKeysResult:
    public_key_list: Optional[PublicKeyList] = field(default=None)
    
