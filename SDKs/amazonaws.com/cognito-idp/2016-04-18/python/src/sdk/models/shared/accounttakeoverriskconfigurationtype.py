from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountTakeoverRiskConfigurationType:
    r"""AccountTakeoverRiskConfigurationType
    Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
    """
    
    actions: AccountTakeoverActionsType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    notify_configuration: Optional[NotifyConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyConfiguration') }})
    
