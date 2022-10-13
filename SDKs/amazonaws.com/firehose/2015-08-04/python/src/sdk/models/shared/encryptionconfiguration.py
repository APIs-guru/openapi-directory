from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import kmsencryptionconfig
from . import noencryptionconfig_enum


@dataclass_json
@dataclass
class EncryptionConfiguration:
    kms_encryption_config: Optional[kmsencryptionconfig.KmsEncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSEncryptionConfig' }})
    no_encryption_config: Optional[noencryptionconfig_enum.NoEncryptionConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoEncryptionConfig' }})
    
