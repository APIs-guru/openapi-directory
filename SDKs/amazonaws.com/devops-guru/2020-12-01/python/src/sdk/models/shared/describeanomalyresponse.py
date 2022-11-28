from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAnomalyResponse:
    proactive_anomaly: Optional[ProactiveAnomaly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveAnomaly') }})
    reactive_anomaly: Optional[ReactiveAnomaly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReactiveAnomaly') }})
    
