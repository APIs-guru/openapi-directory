from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationProperty:
    r"""NotificationProperty
    Specifies configuration properties of a notification.
    """
    
    notify_delay_after: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyDelayAfter') }})
    
