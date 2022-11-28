from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountRecoverySettingType:
    r"""AccountRecoverySettingType
    The data type for <code>AccountRecoverySetting</code>.
    """
    
    recovery_mechanisms: Optional[List[RecoveryOptionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecoveryMechanisms') }})
    
