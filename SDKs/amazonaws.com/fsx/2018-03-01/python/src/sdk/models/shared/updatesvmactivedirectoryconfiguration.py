from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import selfmanagedactivedirectoryconfigurationupdates


@dataclass_json
@dataclass
class UpdateSvmActiveDirectoryConfiguration:
    self_managed_active_directory_configuration: Optional[selfmanagedactivedirectoryconfigurationupdates.SelfManagedActiveDirectoryConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedActiveDirectoryConfiguration' }})
    
