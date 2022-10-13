from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attemptstatus_enum


@dataclass_json
@dataclass
class AttemptRead:
    bytes_synced: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesSynced' }})
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    ended_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endedAt' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    records_synced: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordsSynced' }})
    status: attemptstatus_enum.AttemptStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt' }})
    
