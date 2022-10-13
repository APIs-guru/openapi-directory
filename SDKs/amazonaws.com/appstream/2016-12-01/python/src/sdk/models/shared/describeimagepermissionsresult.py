from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sharedimagepermissions


@dataclass_json
@dataclass
class DescribeImagePermissionsResult:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    shared_image_permissions_list: Optional[List[sharedimagepermissions.SharedImagePermissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedImagePermissionsList' }})
    
