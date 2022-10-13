from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregationtype_enum


@dataclass_json
@dataclass
class AggregationConfig:
    aggregation_type: Optional[aggregationtype_enum.AggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationType' }})
    
