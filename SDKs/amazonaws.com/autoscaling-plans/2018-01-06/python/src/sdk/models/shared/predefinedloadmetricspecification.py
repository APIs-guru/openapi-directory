from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loadmetrictype_enum


@dataclass_json
@dataclass
class PredefinedLoadMetricSpecification:
    predefined_load_metric_type: loadmetrictype_enum.LoadMetricTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredefinedLoadMetricType' }})
    resource_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLabel' }})
    
