from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualServiceData:
    r"""VirtualServiceData
    An object that represents a virtual service returned by a describe operation.
    """
    
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: ResourceMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: VirtualServiceSpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: VirtualServiceStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServiceName') }})
    
