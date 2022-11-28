from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyFieldLevelEncryptionEncryptionEntities:
    r"""TooManyFieldLevelEncryptionEncryptionEntities
    The maximum number of encryption entities for field-level encryption have been created.
    """
    
    message: Optional[str] = field(default=None)
    
