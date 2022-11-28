from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualNodeServiceProvider:
    r"""VirtualNodeServiceProvider
    An object that represents a virtual node service provider.
    """
    
    virtual_node_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    
