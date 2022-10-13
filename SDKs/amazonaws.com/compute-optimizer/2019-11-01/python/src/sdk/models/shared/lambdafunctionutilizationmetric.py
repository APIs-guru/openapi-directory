from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionmetricname_enum
from . import lambdafunctionmetricstatistic_enum


@dataclass_json
@dataclass
class LambdaFunctionUtilizationMetric:
    name: Optional[lambdafunctionmetricname_enum.LambdaFunctionMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    statistic: Optional[lambdafunctionmetricstatistic_enum.LambdaFunctionMetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistic' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
