from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudWatchLoggingOptions:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroupName' }})
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogStreamName' }})
    
