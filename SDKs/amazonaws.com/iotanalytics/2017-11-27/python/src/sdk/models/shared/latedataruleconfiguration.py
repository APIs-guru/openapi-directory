from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deltatimesessionwindowconfiguration


@dataclass_json
@dataclass
class LateDataRuleConfiguration:
    delta_time_session_window_configuration: Optional[deltatimesessionwindowconfiguration.DeltaTimeSessionWindowConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaTimeSessionWindowConfiguration' }})
    
