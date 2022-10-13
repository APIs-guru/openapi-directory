from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectorsummary


@dataclass_json
@dataclass
class ListDetectorsResponse:
    detector_summaries: Optional[List[detectorsummary.DetectorSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
