from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FieldLevelEncryptionProfileInUse:
    r"""FieldLevelEncryptionProfileInUse
    The specified profile for field-level encryption is in use.
    """
    
    message: Optional[str] = field(default=None)
    
