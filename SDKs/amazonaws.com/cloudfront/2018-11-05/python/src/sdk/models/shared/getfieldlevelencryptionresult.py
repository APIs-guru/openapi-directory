from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetFieldLevelEncryptionResult:
    field_level_encryption: Optional[FieldLevelEncryption] = field(default=None)
    
