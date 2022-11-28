from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FieldLevelEncryptionConfigInUse:
    r"""FieldLevelEncryptionConfigInUse
    The specified configuration for field-level encryption is in use.
    """
    
    message: Optional[str] = field(default=None)
    
