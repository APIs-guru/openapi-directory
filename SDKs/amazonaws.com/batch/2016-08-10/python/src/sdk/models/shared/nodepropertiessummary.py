from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodePropertiesSummary:
    r"""NodePropertiesSummary
    An object representing the properties of a node that's associated with a multi-node parallel job.
    """
    
    is_main_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMainNode') }})
    node_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIndex') }})
    num_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNodes') }})
    
