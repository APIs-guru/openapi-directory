from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricname_enum


@dataclass_json
@dataclass
class ProjectedMetric:
    name: Optional[metricname_enum.MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timestamps: Optional[List[datetime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamps' }})
    values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
