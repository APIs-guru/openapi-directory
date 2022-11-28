from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyFieldLevelEncryptionConfigs:
    r"""TooManyFieldLevelEncryptionConfigs
    The maximum number of configurations for field-level encryption have been created.
    """
    
    message: Optional[str] = field(default=None)
    
