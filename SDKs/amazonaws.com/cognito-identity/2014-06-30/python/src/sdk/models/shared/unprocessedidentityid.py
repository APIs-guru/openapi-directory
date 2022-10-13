from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errorcode_enum


@dataclass_json
@dataclass
class UnprocessedIdentityID:
    error_code: Optional[errorcode_enum.ErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    
