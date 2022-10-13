from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import logsconfigstatustype_enum


@dataclass_json
@dataclass
class CloudWatchLogsConfig:
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    status: logsconfigstatustype_enum.LogsConfigStatusTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    
