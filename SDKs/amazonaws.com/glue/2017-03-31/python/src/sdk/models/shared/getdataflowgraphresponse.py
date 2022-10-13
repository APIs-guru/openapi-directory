from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codegenedge
from . import codegennode


@dataclass_json
@dataclass
class GetDataflowGraphResponse:
    dag_edges: Optional[List[codegenedge.CodeGenEdge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagEdges' }})
    dag_nodes: Optional[List[codegennode.CodeGenNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DagNodes' }})
    
