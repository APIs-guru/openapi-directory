from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codegennodearg


@dataclass_json
@dataclass
class CodeGenNode:
    args: List[codegennodearg.CodeGenNodeArg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Args' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineNumber' }})
    node_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    
