from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import insighttype_enum


@dataclass_json
@dataclass
class ListInsightsOngoingStatusFilter:
    type: insighttype_enum.InsightTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
