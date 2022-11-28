from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetFieldLevelEncryptionProfileResult:
    field_level_encryption_profile: Optional[FieldLevelEncryptionProfile] = field(default=None)
    
