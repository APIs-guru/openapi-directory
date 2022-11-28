from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListFieldLevelEncryptionProfilesResult:
    field_level_encryption_profile_list: Optional[FieldLevelEncryptionProfileList] = field(default=None)
    
