from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import registryid


@dataclass_json
@dataclass
class GetRegistryInput:
    registry_id: registryid.RegistryID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryId' }})
    
