from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyFieldLevelEncryptionFieldPatterns:
    r"""TooManyFieldLevelEncryptionFieldPatterns
    The maximum number of field patterns for field-level encryption have been created.
    """
    
    message: Optional[str] = field(default=None)
    
