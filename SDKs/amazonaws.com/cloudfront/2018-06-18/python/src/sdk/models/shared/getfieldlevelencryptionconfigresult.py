from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetFieldLevelEncryptionConfigResult:
    field_level_encryption_config: Optional[FieldLevelEncryptionConfig] = field(default=None)
    
