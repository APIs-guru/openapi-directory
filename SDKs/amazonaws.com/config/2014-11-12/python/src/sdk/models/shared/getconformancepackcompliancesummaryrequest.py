from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetConformancePackComplianceSummaryRequest:
    conformance_pack_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackNames' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
