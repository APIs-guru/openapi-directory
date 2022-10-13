from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import catalogencryptionmode_enum


@dataclass_json
@dataclass
class EncryptionAtRest:
    catalog_encryption_mode: catalogencryptionmode_enum.CatalogEncryptionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogEncryptionMode' }})
    sse_aws_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SseAwsKmsKeyId' }})
    
