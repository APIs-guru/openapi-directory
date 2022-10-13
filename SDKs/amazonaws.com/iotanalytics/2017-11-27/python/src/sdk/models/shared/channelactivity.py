from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelActivity:
    channel_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    
