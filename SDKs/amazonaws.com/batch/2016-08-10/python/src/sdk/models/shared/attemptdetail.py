from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attemptcontainerdetail


@dataclass_json
@dataclass
class AttemptDetail:
    container: Optional[attemptcontainerdetail.AttemptContainerDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    stopped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoppedAt' }})
    
