from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionmemorymetricname_enum
from . import lambdafunctionmemorymetricstatistic_enum


@dataclass_json
@dataclass
class LambdaFunctionMemoryProjectedMetric:
    name: Optional[lambdafunctionmemorymetricname_enum.LambdaFunctionMemoryMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    statistic: Optional[lambdafunctionmemorymetricstatistic_enum.LambdaFunctionMemoryMetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistic' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
