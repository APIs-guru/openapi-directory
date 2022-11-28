from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeProperties:
    r"""NodeProperties
    An object representing the node properties of a multi-node parallel job.
    """
    
    main_node: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainNode') }})
    node_range_properties: List[NodeRangeProperty] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRangeProperties') }})
    num_nodes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNodes') }})
    
