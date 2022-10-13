from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubModule:
    absolute_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absolutePath' }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativePath' }})
    
