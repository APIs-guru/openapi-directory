from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeGenNodeArg:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    param: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Param' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
