from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Phase2EncryptionAlgorithmsListValue:
    r"""Phase2EncryptionAlgorithmsListValue
    The encryption algorithm for phase 2 IKE negotiations.
    """
    
    value: Optional[str] = field(default=None)
    
