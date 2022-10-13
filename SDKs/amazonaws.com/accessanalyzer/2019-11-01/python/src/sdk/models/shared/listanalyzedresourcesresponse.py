from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import analyzedresourcesummary


@dataclass_json
@dataclass
class ListAnalyzedResourcesResponse:
    analyzed_resources: List[analyzedresourcesummary.AnalyzedResourceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzedResources' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
