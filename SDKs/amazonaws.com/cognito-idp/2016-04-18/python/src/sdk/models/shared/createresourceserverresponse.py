from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourceservertype


@dataclass_json
@dataclass
class CreateResourceServerResponse:
    resource_server: resourceservertype.ResourceServerType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceServer' }})
    
