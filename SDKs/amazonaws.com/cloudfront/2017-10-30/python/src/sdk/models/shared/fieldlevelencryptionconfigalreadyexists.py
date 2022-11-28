from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FieldLevelEncryptionConfigAlreadyExists:
    r"""FieldLevelEncryptionConfigAlreadyExists
    The specified configuration for field-level encryption already exists.
    """
    
    message: Optional[str] = field(default=None)
    
