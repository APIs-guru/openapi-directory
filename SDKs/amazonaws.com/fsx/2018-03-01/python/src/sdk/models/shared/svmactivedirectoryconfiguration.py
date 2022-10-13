from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import selfmanagedactivedirectoryattributes


@dataclass_json
@dataclass
class SvmActiveDirectoryConfiguration:
    net_bios_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetBiosName' }})
    self_managed_active_directory_configuration: Optional[selfmanagedactivedirectoryattributes.SelfManagedActiveDirectoryAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedActiveDirectoryConfiguration' }})
    
