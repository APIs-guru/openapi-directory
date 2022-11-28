from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RuleSourceTypeEnum(str, Enum):
    CHANNEL_MESSAGE = "channel.message"
    CHANNEL_PRESENCE = "channel.presence"
    CHANNEL_LIFECYCLE = "channel.lifecycle"
    CHANNEL_OCCUPANCY = "channel.occupancy"


@dataclass_json
@dataclass
class RuleSource:
    channel_filter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelFilter') }})
    type: RuleSourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
