from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import phasestatus_enum
from . import phasestatus_enum
from . import phasestatus_enum


@dataclass_json
@dataclass
class TaskExecutionResultDetail:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetail' }})
    prepare_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrepareDuration' }})
    prepare_status: Optional[phasestatus_enum.PhaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrepareStatus' }})
    total_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalDuration' }})
    transfer_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransferDuration' }})
    transfer_status: Optional[phasestatus_enum.PhaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransferStatus' }})
    verify_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerifyDuration' }})
    verify_status: Optional[phasestatus_enum.PhaseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerifyStatus' }})
    
