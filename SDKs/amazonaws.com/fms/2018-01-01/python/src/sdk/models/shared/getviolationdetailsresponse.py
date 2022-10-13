from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import violationdetail


@dataclass_json
@dataclass
class GetViolationDetailsResponse:
    violation_detail: Optional[violationdetail.ViolationDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationDetail' }})
    
