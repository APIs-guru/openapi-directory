from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import componentsummary


@dataclass_json
@dataclass
class ListComponentBuildVersionsResponse:
    component_summary_list: Optional[List[componentsummary.ComponentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
