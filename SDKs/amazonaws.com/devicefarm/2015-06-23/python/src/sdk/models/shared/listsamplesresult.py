from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sample


@dataclass_json
@dataclass
class ListSamplesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    samples: Optional[List[sample.Sample]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samples' }})
    
