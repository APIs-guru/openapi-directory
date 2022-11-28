from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APICache:
    r"""APICache
    The <code>ApiCache</code> object.
    """
    
    api_caching_behavior: Optional[APICachingBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCachingBehavior') }})
    at_rest_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atRestEncryptionEnabled') }})
    status: Optional[APICacheStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transit_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionEnabled') }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: Optional[APICacheTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
