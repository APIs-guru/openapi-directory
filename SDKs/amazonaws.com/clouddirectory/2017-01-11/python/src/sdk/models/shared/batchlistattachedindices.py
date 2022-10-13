from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectreference


@dataclass_json
@dataclass
class BatchListAttachedIndices:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    target_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetReference' }})
    
