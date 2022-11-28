from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryStreamEncryptionConfigurationInput:
    r"""DeliveryStreamEncryptionConfigurationInput
    Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). 
    """
    
    key_type: KeyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyType') }})
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyARN') }})
    
