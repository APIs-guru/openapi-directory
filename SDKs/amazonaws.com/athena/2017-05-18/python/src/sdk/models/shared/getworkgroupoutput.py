from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workgroup


@dataclass_json
@dataclass
class GetWorkGroupOutput:
    work_group: Optional[workgroup.WorkGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
