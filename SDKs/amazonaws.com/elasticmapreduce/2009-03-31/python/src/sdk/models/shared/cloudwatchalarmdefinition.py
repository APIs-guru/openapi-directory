from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import metricdimension
from . import statistic_enum
from . import unit_enum


@dataclass_json
@dataclass
class CloudWatchAlarmDefinition:
    comparison_operator: comparisonoperator_enum.ComparisonOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComparisonOperator' }})
    dimensions: Optional[List[metricdimension.MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationPeriods' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    period: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Period' }})
    statistic: Optional[statistic_enum.StatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statistic' }})
    threshold: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Threshold' }})
    unit: Optional[unit_enum.UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
