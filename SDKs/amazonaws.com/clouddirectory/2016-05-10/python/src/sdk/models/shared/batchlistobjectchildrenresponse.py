from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BatchListObjectChildrenResponse:
    children: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Children' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
