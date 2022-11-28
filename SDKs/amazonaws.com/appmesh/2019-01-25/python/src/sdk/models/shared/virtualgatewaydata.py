from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayData:
    r"""VirtualGatewayData
    An object that represents a virtual gateway returned by a describe operation.
    """
    
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: ResourceMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: VirtualGatewaySpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: VirtualGatewayStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_gateway_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayName') }})
    
