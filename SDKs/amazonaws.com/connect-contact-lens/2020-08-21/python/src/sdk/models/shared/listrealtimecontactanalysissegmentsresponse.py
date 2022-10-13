from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import realtimecontactanalysissegment


@dataclass_json
@dataclass
class ListRealtimeContactAnalysisSegmentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    segments: List[realtimecontactanalysissegment.RealtimeContactAnalysisSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segments' }})
    
