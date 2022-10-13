from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cmktype_enum


@dataclass_json
@dataclass
class KmsEncryptionConfig:
    cmk_type: cmktype_enum.CmkTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CmkType' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    
