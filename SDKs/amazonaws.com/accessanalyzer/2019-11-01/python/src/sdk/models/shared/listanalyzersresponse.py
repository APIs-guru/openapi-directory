from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import analyzersummary


@dataclass_json
@dataclass
class ListAnalyzersResponse:
    analyzers: List[analyzersummary.AnalyzerSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
