from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import archive


@dataclass_json
@dataclass
class ListArchivesResponse:
    archives: Optional[List[archive.Archive]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Archives' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
