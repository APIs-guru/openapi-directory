from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keytype_enum


@dataclass_json
@dataclass
class DeliveryStreamEncryptionConfigurationInput:
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyARN' }})
    key_type: keytype_enum.KeyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyType' }})
    
