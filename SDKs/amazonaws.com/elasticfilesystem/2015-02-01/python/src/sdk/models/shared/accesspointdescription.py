from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lifecyclestate_enum
from . import posixuser
from . import rootdirectory
from . import tag


@dataclass_json
@dataclass
class AccessPointDescription:
    access_point_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessPointArn' }})
    access_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessPointId' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    life_cycle_state: Optional[lifecyclestate_enum.LifeCycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifeCycleState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    posix_user: Optional[posixuser.PosixUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PosixUser' }})
    root_directory: Optional[rootdirectory.RootDirectory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootDirectory' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
