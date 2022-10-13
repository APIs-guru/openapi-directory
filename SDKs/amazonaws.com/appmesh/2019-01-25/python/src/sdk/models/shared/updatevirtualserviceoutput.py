from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import virtualservicedata


@dataclass_json
@dataclass
class UpdateVirtualServiceOutput:
    virtual_service: virtualservicedata.VirtualServiceData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualService' }})
    
