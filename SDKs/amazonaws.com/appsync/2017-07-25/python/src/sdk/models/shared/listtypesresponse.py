from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import type


@dataclass_json
@dataclass
class ListTypesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    types: Optional[List[type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
