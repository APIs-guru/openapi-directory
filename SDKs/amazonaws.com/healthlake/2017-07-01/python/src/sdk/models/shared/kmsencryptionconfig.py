from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KmsEncryptionConfig:
    r"""KmsEncryptionConfig
     The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption. 
    """
    
    cmk_type: CmkTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CmkType') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
