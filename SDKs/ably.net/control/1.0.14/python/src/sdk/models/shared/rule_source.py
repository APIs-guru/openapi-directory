from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class RuleSourceTypeEnum(str, Enum):
    CHANNEL_MESSAGE = "channel.message"
    CHANNEL_PRESENCE = "channel.presence"
    CHANNEL_LIFECYCLE = "channel.lifecycle"
    CHANNEL_OCCUPANCY = "channel.occupancy"


@dataclass_json
@dataclass
class RuleSource:
    channel_filter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelFilter' }})
    type: RuleSourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
