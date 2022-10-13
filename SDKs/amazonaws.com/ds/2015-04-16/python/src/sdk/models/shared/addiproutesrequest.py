from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iproute


@dataclass_json
@dataclass
class AddIPRoutesRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    ip_routes: List[iproute.IPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRoutes' }})
    update_security_group_for_directory_controllers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateSecurityGroupForDirectoryControllers' }})
    
