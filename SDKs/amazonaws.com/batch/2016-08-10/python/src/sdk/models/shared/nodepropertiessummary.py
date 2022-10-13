from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodePropertiesSummary:
    is_main_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMainNode' }})
    node_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIndex' }})
    num_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numNodes' }})
    
