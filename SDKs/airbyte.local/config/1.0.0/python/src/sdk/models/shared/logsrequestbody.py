from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import logtype_enum


@dataclass_json
@dataclass
class LogsRequestBody:
    log_type: logtype_enum.LogTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logType' }})
    
