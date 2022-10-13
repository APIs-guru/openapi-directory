from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteWorkGroupInput:
    recursive_delete_option: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecursiveDeleteOption' }})
    work_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
