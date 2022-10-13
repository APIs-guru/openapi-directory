from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directory


@dataclass_json
@dataclass
class ListDirectoriesResponse:
    directories: List[directory.Directory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Directories' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
