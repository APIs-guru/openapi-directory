from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import imagepermissions


@dataclass_json
@dataclass
class SharedImagePermissions:
    image_permissions: imagepermissions.ImagePermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePermissions' }})
    shared_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedAccountId' }})
    
