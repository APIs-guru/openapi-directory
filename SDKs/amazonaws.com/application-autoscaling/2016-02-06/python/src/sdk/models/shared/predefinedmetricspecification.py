from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metrictype_enum


@dataclass_json
@dataclass
class PredefinedMetricSpecification:
    predefined_metric_type: metrictype_enum.MetricTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredefinedMetricType' }})
    resource_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLabel' }})
    
