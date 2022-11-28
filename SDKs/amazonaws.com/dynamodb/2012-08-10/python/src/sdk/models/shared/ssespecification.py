from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SseSpecification:
    r"""SseSpecification
    Represents the settings used to enable server-side encryption.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSMasterKeyId') }})
    sse_type: Optional[SseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSEType') }})
    
