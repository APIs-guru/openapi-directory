from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import statistics


@dataclass_json
@dataclass
class GetStatisticsResponse:
    statistics: Optional[statistics.Statistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    
