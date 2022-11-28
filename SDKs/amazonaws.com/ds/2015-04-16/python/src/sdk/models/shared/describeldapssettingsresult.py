from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeLdapsSettingsResult:
    ldaps_settings_info: Optional[List[LdapsSettingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LDAPSSettingsInfo') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
