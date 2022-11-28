from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FieldLevelEncryptionList:
    r"""FieldLevelEncryptionList
    List of field-level encrpytion configurations.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[FieldLevelEncryptionSummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
