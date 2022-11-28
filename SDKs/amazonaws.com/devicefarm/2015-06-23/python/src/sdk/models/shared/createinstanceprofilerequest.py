from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateInstanceProfileRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    exclude_app_packages_from_cleanup: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeAppPackagesFromCleanup') }})
    package_cleanup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageCleanup') }})
    reboot_after_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebootAfterUse') }})
    
