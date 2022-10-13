from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ebsmetricname_enum
from . import metricstatistic_enum


@dataclass_json
@dataclass
class EbsUtilizationMetric:
    name: Optional[ebsmetricname_enum.EbsMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    statistic: Optional[metricstatistic_enum.MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistic' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
