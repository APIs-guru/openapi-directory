from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import script


@dataclass_json
@dataclass
class ListScriptsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scripts: Optional[List[script.Script]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scripts' }})
    
