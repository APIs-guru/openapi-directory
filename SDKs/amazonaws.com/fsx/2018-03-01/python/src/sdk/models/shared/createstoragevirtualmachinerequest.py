from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStorageVirtualMachineRequest:
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    active_directory_configuration: Optional[CreateSvmActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveDirectoryConfiguration') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    root_volume_security_style: Optional[StorageVirtualMachineRootVolumeSecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeSecurityStyle') }})
    svm_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SvmAdminPassword') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
