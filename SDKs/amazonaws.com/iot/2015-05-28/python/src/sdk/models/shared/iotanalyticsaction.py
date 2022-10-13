from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IotAnalyticsAction:
    batch_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchMode' }})
    channel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelArn' }})
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
