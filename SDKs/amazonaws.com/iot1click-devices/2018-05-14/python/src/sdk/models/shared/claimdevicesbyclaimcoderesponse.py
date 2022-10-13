from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClaimDevicesByClaimCodeResponse:
    claim_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClaimCode' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    
