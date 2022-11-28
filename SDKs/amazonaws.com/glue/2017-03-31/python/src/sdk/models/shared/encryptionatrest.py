from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptionAtRest:
    r"""EncryptionAtRest
    Specifies the encryption-at-rest configuration for the Data Catalog.
    """
    
    catalog_encryption_mode: CatalogEncryptionModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogEncryptionMode') }})
    sse_aws_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseAwsKmsKeyId') }})
    
