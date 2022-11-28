from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyFieldLevelEncryptionContentTypeProfiles:
    r"""TooManyFieldLevelEncryptionContentTypeProfiles
    The maximum number of content type profiles for field-level encryption have been created.
    """
    
    message: Optional[str] = field(default=None)
    
