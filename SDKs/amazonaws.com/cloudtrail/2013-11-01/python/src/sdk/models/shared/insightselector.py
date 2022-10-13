from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import insighttype_enum


@dataclass_json
@dataclass
class InsightSelector:
    insight_type: Optional[insighttype_enum.InsightTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightType' }})
    
