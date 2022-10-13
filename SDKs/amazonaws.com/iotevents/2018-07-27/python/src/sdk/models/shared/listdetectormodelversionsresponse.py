from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectormodelversionsummary


@dataclass_json
@dataclass
class ListDetectorModelVersionsResponse:
    detector_model_version_summaries: Optional[List[detectormodelversionsummary.DetectorModelVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelVersionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
