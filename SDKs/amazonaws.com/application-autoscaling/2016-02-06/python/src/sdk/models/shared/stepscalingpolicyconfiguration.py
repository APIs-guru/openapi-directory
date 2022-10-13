from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import adjustmenttype_enum
from . import metricaggregationtype_enum
from . import stepadjustment


@dataclass_json
@dataclass
class StepScalingPolicyConfiguration:
    adjustment_type: Optional[adjustmenttype_enum.AdjustmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdjustmentType' }})
    cooldown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cooldown' }})
    metric_aggregation_type: Optional[metricaggregationtype_enum.MetricAggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricAggregationType' }})
    min_adjustment_magnitude: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinAdjustmentMagnitude' }})
    step_adjustments: Optional[List[stepadjustment.StepAdjustment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepAdjustments' }})
    
