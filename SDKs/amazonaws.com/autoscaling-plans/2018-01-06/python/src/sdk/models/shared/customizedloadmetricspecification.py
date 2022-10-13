from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdimension
from . import metricstatistic_enum


@dataclass_json
@dataclass
class CustomizedLoadMetricSpecification:
    dimensions: Optional[List[metricdimension.MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    namespace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    statistic: metricstatistic_enum.MetricStatisticEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statistic' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
