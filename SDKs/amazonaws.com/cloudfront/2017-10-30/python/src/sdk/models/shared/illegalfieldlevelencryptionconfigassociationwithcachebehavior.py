from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior:
    r"""IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    The specified configuration for field-level encryption can't be associated with the specified cache behavior.
    """
    
    message: Optional[str] = field(default=None)
    
