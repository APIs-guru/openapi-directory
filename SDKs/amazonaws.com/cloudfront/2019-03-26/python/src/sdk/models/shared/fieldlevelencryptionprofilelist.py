from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FieldLevelEncryptionProfileList:
    r"""FieldLevelEncryptionProfileList
    List of field-level encryption profiles.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[FieldLevelEncryptionProfileSummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
