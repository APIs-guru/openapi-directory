from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
    """
    
    channels: Optional[List[Channel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    
