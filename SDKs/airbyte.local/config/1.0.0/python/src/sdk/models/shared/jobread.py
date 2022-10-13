from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import jobconfigtype_enum
from . import jobstatus_enum


@dataclass_json
@dataclass
class JobRead:
    config_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configId' }})
    config_type: jobconfigtype_enum.JobConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configType' }})
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    
