from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import selfmanagedactivedirectoryconfiguration


@dataclass_json
@dataclass
class CreateSvmActiveDirectoryConfiguration:
    net_bios_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetBiosName' }})
    self_managed_active_directory_configuration: Optional[selfmanagedactivedirectoryconfiguration.SelfManagedActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedActiveDirectoryConfiguration' }})
    
