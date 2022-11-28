from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExpiryEventsConfiguration:
    r"""ExpiryEventsConfiguration
    Object containing expiration events options associated with an Amazon Web Services account.
    """
    
    days_before_expiry: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DaysBeforeExpiry') }})
    
