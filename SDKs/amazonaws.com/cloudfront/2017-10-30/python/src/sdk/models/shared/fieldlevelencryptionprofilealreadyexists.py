from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FieldLevelEncryptionProfileAlreadyExists:
    r"""FieldLevelEncryptionProfileAlreadyExists
    The specified profile for field-level encryption already exists.
    """
    
    message: Optional[str] = field(default=None)
    
