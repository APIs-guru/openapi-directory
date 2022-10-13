from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListHsmsResponse:
    hsm_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
