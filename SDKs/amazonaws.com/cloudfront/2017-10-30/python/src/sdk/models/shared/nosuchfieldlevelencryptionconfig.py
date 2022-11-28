from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchFieldLevelEncryptionConfig:
    r"""NoSuchFieldLevelEncryptionConfig
    The specified configuration for field-level encryption doesn't exist.
    """
    
    message: Optional[str] = field(default=None)
    
