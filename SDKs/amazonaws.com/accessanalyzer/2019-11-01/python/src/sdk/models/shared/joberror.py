from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import joberrorcode_enum


@dataclass_json
@dataclass
class JobError:
    code: joberrorcode_enum.JobErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
