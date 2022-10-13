from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accelerator


@dataclass_json
@dataclass
class ListAcceleratorsResponse:
    accelerators: Optional[List[accelerator.Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accelerators' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
