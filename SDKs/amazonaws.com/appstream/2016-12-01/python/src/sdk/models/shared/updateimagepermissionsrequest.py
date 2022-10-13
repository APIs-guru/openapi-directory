from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import imagepermissions


@dataclass_json
@dataclass
class UpdateImagePermissionsRequest:
    image_permissions: imagepermissions.ImagePermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImagePermissions' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    shared_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedAccountId' }})
    
