from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import environmentstatus_enum


@dataclass_json
@dataclass
class DescribeEnvironmentStatusResult:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: environmentstatus_enum.EnvironmentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
