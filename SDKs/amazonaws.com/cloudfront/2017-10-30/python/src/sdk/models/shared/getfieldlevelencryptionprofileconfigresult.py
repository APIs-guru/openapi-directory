from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetFieldLevelEncryptionProfileConfigResult:
    field_level_encryption_profile_config: Optional[FieldLevelEncryptionProfileConfig] = field(default=None)
    
