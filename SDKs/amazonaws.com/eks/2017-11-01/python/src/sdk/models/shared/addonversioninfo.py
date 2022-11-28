from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddonVersionInfo:
    r"""AddonVersionInfo
    Information about an add-on version.
    """
    
    addon_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonVersion') }})
    architecture: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    compatibilities: Optional[List[Compatibility]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibilities') }})
    
