from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import build


@dataclass_json
@dataclass
class BatchGetBuildsOutput:
    builds: Optional[List[build.Build]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builds' }})
    builds_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildsNotFound' }})
    
