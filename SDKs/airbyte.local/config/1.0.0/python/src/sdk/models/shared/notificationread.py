from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NotificationReadStatusEnum(str, Enum):
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass_json
@dataclass
class NotificationRead:
    status: NotificationReadStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
