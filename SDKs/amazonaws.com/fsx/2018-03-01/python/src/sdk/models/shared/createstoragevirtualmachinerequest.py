from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import createsvmactivedirectoryconfiguration
from . import storagevirtualmachinerootvolumesecuritystyle_enum
from . import tag


@dataclass_json
@dataclass
class CreateStorageVirtualMachineRequest:
    active_directory_configuration: Optional[createsvmactivedirectoryconfiguration.CreateSvmActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDirectoryConfiguration' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    root_volume_security_style: Optional[storagevirtualmachinerootvolumesecuritystyle_enum.StorageVirtualMachineRootVolumeSecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootVolumeSecurityStyle' }})
    svm_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SvmAdminPassword' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
