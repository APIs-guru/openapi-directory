from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobconfigtype_enum
from . import logread


@dataclass_json
@dataclass
class SynchronousJobRead:
    config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_type: jobconfigtype_enum.JobConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    ended_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endedAt' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logs: Optional[logread.LogRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    succeeded: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeeded' }})
    
