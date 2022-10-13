from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import creationinfo


@dataclass_json
@dataclass
class RootDirectory:
    creation_info: Optional[creationinfo.CreationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationInfo' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    
