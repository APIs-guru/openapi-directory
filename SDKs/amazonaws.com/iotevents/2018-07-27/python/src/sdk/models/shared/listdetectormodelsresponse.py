from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectormodelsummary


@dataclass_json
@dataclass
class ListDetectorModelsResponse:
    detector_model_summaries: Optional[List[detectormodelsummary.DetectorModelSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
