from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edge
from . import node


@dataclass_json
@dataclass
class WorkflowGraph:
    edges: Optional[List[edge.Edge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Edges' }})
    nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nodes' }})
    
