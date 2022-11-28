from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessPointDescription:
    r"""AccessPointDescription
    Provides a description of an EFS file system access point.
    """
    
    access_point_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPointArn') }})
    access_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPointId') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    file_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    life_cycle_state: Optional[LifeCycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifeCycleState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    posix_user: Optional[PosixUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixUser') }})
    root_directory: Optional[RootDirectory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDirectory') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
