from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionkey
from . import artifactstoretype_enum


@dataclass_json
@dataclass
class ArtifactStore:
    encryption_key: Optional[encryptionkey.EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    type: artifactstoretype_enum.ArtifactStoreTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
