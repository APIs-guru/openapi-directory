from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcemetadata
from . import virtualservicespec
from . import virtualservicestatus


@dataclass_json
@dataclass
class VirtualServiceData:
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    metadata: resourcemetadata.ResourceMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: virtualservicespec.VirtualServiceSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: virtualservicestatus.VirtualServiceStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    virtual_service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualServiceName' }})
    
