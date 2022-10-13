from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class KeyPostCapabilitiesEnum(str, Enum):
    PUBLISH = "publish"
    SUBSCRIBE = "subscribe"
    HISTORY = "history"
    PRESENCE = "presence"
    CHANNEL_METADATA = "channel-metadata"
    PUSH_ADMIN = "push-admin"
    PUSH_SUBSCRIBE = "push-subscribe"
    STATISTICS = "statistics"


@dataclass_json
@dataclass
class KeyPost:
    capabilities: List[KeyPostCapabilitiesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    channels: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
