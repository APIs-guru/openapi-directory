from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComplianceContributorCount:
    cap_exceeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapExceeded' }})
    capped_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappedCount' }})
    
