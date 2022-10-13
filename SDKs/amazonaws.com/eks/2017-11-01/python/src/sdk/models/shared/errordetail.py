from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import errorcode_enum


@dataclass_json
@dataclass
class ErrorDetail:
    error_code: Optional[errorcode_enum.ErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    resource_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIds' }})
    
