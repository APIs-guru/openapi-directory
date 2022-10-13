from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FunctionRunAsConfig:
    gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gid' }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Uid' }})
    
