from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EncryptionEntities:
    r"""EncryptionEntities
    Complex data type for field-level encryption profiles that includes all of the encryption entities. 
    """
    
    quantity: int = field()
    items: Optional[List[EncryptionEntity]] = field(default=None)
    
