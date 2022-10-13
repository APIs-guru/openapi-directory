from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudWatchMonitoringConfiguration:
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_stream_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamNamePrefix' }})
    
