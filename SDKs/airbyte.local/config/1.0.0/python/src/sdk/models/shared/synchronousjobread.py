from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SynchronousJobRead:
    config_type: JobConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configType') }})
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    ended_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    succeeded: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeeded') }})
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    logs: Optional[LogRead] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    
