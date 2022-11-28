from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KeyResponseCapabilityEnum(str, Enum):
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
class KeyResponse:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    capability: Optional[dict[str, List[KeyResponseCapabilityEnum]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    created: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    modified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
