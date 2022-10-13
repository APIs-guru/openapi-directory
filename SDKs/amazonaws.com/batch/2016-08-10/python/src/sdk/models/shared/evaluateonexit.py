from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import retryaction_enum


@dataclass_json
@dataclass
class EvaluateOnExit:
    action: retryaction_enum.RetryActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    on_exit_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onExitCode' }})
    on_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onReason' }})
    on_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onStatusReason' }})
    
