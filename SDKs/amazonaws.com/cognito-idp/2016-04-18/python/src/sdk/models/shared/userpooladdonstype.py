from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserPoolAddOnsType:
    r"""UserPoolAddOnsType
    The user pool add-ons type.
    """
    
    advanced_security_mode: AdvancedSecurityModeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdvancedSecurityMode') }})
    
