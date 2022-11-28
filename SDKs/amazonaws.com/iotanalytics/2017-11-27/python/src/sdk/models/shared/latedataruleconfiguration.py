from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LateDataRuleConfiguration:
    r"""LateDataRuleConfiguration
    The information needed to configure a delta time session window.
    """
    
    delta_time_session_window_configuration: Optional[DeltaTimeSessionWindowConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaTimeSessionWindowConfiguration') }})
    
