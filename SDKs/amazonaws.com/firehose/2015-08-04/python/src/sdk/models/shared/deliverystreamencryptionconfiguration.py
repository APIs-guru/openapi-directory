from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import failuredescription
from . import keytype_enum
from . import deliverystreamencryptionstatus_enum


@dataclass_json
@dataclass
class DeliveryStreamEncryptionConfiguration:
    failure_description: Optional[failuredescription.FailureDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDescription' }})
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyARN' }})
    key_type: Optional[keytype_enum.KeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyType' }})
    status: Optional[deliverystreamencryptionstatus_enum.DeliveryStreamEncryptionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
