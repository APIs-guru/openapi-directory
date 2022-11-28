from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationComponent:
    r"""ApplicationComponent
    Describes a standalone resource or similarly grouped resources that the application is made up of.
    """
    
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    component_remarks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentRemarks') }})
    detected_workload: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectedWorkload') }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Monitor') }})
    os_type: Optional[OsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OsType') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    tier: Optional[TierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
