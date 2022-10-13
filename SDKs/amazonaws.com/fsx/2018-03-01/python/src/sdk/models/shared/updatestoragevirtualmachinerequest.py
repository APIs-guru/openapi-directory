from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updatesvmactivedirectoryconfiguration


@dataclass_json
@dataclass
class UpdateStorageVirtualMachineRequest:
    active_directory_configuration: Optional[updatesvmactivedirectoryconfiguration.UpdateSvmActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDirectoryConfiguration' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    storage_virtual_machine_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineId' }})
    svm_admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SvmAdminPassword' }})
    
