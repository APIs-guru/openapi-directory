from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeGenNode:
    r"""CodeGenNode
    Represents a node in a directed acyclic graph (DAG)
    """
    
    args: List[CodeGenNodeArg] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Args') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    node_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineNumber') }})
    
