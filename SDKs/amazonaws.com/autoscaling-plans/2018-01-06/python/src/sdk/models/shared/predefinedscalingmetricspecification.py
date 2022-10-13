from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalingmetrictype_enum


@dataclass_json
@dataclass
class PredefinedScalingMetricSpecification:
    predefined_scaling_metric_type: scalingmetrictype_enum.ScalingMetricTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredefinedScalingMetricType' }})
    resource_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLabel' }})
    
