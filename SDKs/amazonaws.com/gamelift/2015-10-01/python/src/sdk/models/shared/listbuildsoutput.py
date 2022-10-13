from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import build


@dataclass_json
@dataclass
class ListBuildsOutput:
    builds: Optional[List[build.Build]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Builds' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
