from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FieldLevelEncryptionProfileSizeExceeded:
    r"""FieldLevelEncryptionProfileSizeExceeded
    The maximum size of a profile for field-level encryption was exceeded.
    """
    
    message: Optional[str] = field(default=None)
    
