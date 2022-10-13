from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class Task:
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressPercent' }})
    status: status_enum.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetail' }})
    
