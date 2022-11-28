from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowGraph:
    r"""WorkflowGraph
    A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
    """
    
    edges: Optional[List[Edge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edges') }})
    nodes: Optional[List[Node]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nodes') }})
    
