from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstallStatusStatus:
    finished: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemCount' }})
    

@dataclass_json
@dataclass
class InstallStatus:
    status: Optional[InstallStatusStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
