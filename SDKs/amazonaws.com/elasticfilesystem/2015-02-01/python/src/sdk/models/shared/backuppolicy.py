from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class BackupPolicy:
    status: status_enum.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
