from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyFieldLevelEncryptionQueryArgProfiles:
    r"""TooManyFieldLevelEncryptionQueryArgProfiles
    The maximum number of query arg profiles for field-level encryption have been created.
    """
    
    message: Optional[str] = field(default=None)
    
