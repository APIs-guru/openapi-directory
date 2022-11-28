from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Channel:
    r"""Channel
    Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
    """
    
    event_publishers: List[EventPublisherEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPublishers') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
