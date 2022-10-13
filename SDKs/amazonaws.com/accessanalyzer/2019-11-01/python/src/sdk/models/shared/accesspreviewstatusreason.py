from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import accesspreviewstatusreasoncode_enum


@dataclass_json
@dataclass
class AccessPreviewStatusReason:
    code: accesspreviewstatusreasoncode_enum.AccessPreviewStatusReasonCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
