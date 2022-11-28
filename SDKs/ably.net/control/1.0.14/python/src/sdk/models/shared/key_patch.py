from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    capabilities: Optional[List[KeyPatchCapabilitiesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
