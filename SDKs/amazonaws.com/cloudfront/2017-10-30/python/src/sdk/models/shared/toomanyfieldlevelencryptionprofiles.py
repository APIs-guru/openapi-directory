from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyFieldLevelEncryptionProfiles:
    r"""TooManyFieldLevelEncryptionProfiles
    The maximum number of profiles for field-level encryption have been created.
    """
    
    message: Optional[str] = field(default=None)
    
