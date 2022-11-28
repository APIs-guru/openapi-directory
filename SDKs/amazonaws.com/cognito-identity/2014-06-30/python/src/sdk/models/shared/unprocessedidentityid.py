from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnprocessedIdentityID:
    r"""UnprocessedIdentityID
    An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
    """
    
    error_code: Optional[ErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    
