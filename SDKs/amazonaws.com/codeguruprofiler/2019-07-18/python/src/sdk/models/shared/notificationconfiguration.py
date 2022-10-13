from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channel


@dataclass_json
@dataclass
class NotificationConfiguration:
    channels: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    
