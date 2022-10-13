from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import noderangeproperty


@dataclass_json
@dataclass
class NodeProperties:
    main_node: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainNode' }})
    node_range_properties: List[noderangeproperty.NodeRangeProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeRangeProperties' }})
    num_nodes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numNodes' }})
    
