from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Criterion:
    contains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contains' }})
    eq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eq' }})
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exists' }})
    neq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neq' }})
    
