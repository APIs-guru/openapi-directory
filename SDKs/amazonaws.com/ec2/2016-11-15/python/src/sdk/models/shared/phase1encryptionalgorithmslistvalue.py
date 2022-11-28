from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Phase1EncryptionAlgorithmsListValue:
    r"""Phase1EncryptionAlgorithmsListValue
    The encryption algorithm for phase 1 IKE negotiations.
    """
    
    value: Optional[str] = field(default=None)
    
