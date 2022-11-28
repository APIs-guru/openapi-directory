from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeRangeProperty:
    r"""NodeRangeProperty
    An object representing the properties of the node range for a multi-node parallel job.
    """
    
    target_nodes: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNodes') }})
    container: Optional[ContainerProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    
