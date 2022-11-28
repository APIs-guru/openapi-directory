from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddonInfo:
    r"""AddonInfo
    Information about an add-on.
    """
    
    addon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonName') }})
    addon_versions: Optional[List[AddonVersionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonVersions') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
