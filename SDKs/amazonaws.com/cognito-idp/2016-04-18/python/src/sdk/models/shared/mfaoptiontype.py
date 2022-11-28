from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MfaOptionType:
    r"""MfaOptionType
     <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
    """
    
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    delivery_medium: Optional[DeliveryMediumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMedium') }})
    
