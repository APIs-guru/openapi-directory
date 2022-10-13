from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import analysisresult


@dataclass_json
@dataclass
class GetDetectorModelAnalysisResultsResponse:
    analysis_results: Optional[List[analysisresult.AnalysisResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
