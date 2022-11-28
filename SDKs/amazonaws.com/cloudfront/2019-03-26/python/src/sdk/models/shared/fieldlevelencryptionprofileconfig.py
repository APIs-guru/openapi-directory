from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class FieldLevelEncryptionProfileConfig:
    r"""FieldLevelEncryptionProfileConfig
    A complex data type of profiles for the field-level encryption.
    """
    
    caller_reference: str = field()
    encryption_entities: EncryptionEntities = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    
