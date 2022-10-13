from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import approvalstatus_enum


@dataclass_json
@dataclass
class ApprovalResult:
    status: approvalstatus_enum.ApprovalStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    summary: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
