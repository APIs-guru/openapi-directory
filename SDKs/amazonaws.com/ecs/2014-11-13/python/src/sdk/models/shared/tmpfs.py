from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tmpfs:
    container_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPath' }})
    mount_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountOptions' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    
