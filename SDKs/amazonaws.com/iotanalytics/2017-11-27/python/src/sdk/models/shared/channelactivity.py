from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelActivity:
    r"""ChannelActivity
    The activity that determines the source of the messages to be processed.
    """
    
    channel_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
