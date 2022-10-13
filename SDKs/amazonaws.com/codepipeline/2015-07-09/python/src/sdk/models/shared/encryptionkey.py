from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import encryptionkeytype_enum


@dataclass_json
@dataclass
class EncryptionKey:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: encryptionkeytype_enum.EncryptionKeyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
