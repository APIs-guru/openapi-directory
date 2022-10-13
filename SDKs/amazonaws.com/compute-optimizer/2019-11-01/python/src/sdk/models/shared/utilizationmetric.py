from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metricname_enum
from . import metricstatistic_enum


@dataclass_json
@dataclass
class UtilizationMetric:
    name: Optional[metricname_enum.MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    statistic: Optional[metricstatistic_enum.MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistic' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
