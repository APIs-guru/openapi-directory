from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectreference


@dataclass_json
@dataclass
class BatchLookupPolicy:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    
