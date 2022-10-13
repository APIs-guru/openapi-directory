from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateInstanceProfileRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    exclude_app_packages_from_cleanup: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeAppPackagesFromCleanup' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_cleanup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageCleanup' }})
    reboot_after_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebootAfterUse' }})
    
