from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Behavior:
    r"""Behavior
    A Device Defender security profile behavior.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    criteria: Optional[BehaviorCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_dimension: Optional[MetricDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDimension') }})
    suppress_alerts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressAlerts') }})
    
