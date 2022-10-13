from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import machinelearningdetectionconfig
from . import statisticalthreshold
from . import metricvalue


@dataclass_json
@dataclass
class BehaviorCriteria:
    comparison_operator: Optional[comparisonoperator_enum.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonOperator' }})
    consecutive_datapoints_to_alarm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consecutiveDatapointsToAlarm' }})
    consecutive_datapoints_to_clear: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consecutiveDatapointsToClear' }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSeconds' }})
    ml_detection_config: Optional[machinelearningdetectionconfig.MachineLearningDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mlDetectionConfig' }})
    statistical_threshold: Optional[statisticalthreshold.StatisticalThreshold] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statisticalThreshold' }})
    value: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
