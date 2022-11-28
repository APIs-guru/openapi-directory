from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyDistributionsAssociatedToFieldLevelEncryptionConfig:
    r"""TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    The maximum number of distributions have been associated with the specified configuration for field-level encryption.
    """
    
    message: Optional[str] = field(default=None)
    
