from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class KeyPatchCapabilitiesEnum(str, Enum):
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
class KeyPatch:
    capabilities: Optional[List[KeyPatchCapabilitiesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
