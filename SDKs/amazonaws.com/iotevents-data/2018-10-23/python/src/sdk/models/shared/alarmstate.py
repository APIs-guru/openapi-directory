from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import customeraction
from . import ruleevaluation
from . import alarmstatename_enum
from . import systemevent


@dataclass_json
@dataclass
class AlarmState:
    customer_action: Optional[customeraction.CustomerAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAction' }})
    rule_evaluation: Optional[ruleevaluation.RuleEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleEvaluation' }})
    state_name: Optional[alarmstatename_enum.AlarmStateNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateName' }})
    system_event: Optional[systemevent.SystemEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemEvent' }})
    
