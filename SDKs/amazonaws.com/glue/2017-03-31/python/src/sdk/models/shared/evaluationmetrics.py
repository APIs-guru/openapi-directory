from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findmatchesmetrics
from . import transformtype_enum


@dataclass_json
@dataclass
class EvaluationMetrics:
    find_matches_metrics: Optional[findmatchesmetrics.FindMatchesMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindMatchesMetrics' }})
    transform_type: transformtype_enum.TransformTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformType' }})
    
