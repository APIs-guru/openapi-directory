from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListFieldLevelEncryptionConfigsResult:
    field_level_encryption_list: Optional[FieldLevelEncryptionList] = field(default=None)
    
