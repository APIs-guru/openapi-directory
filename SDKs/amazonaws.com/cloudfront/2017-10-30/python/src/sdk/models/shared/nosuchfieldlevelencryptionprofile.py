from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchFieldLevelEncryptionProfile:
    r"""NoSuchFieldLevelEncryptionProfile
    The specified profile for field-level encryption doesn't exist.
    """
    
    message: Optional[str] = field(default=None)
    
