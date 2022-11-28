from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Anomaly:
    r"""Anomaly
     Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time. 
    """
    
    instances: List[AnomalyInstance] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    metric: Metric = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
