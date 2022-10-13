from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thirdpartyjobdata


@dataclass_json
@dataclass
class ThirdPartyJobDetails:
    data: Optional[thirdpartyjobdata.ThirdPartyJobData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    
