from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShareRule:
    r"""ShareRule
    Specifies a rule for sharing snapshots across Amazon Web Services accounts.
    """
    
    target_accounts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetAccounts') }})
    unshare_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnshareInterval') }})
    unshare_interval_unit: Optional[RetentionIntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnshareIntervalUnit') }})
    
