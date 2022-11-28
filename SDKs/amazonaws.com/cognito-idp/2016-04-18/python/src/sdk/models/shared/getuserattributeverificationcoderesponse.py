from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetUserAttributeVerificationCodeResponse:
    r"""GetUserAttributeVerificationCodeResponse
    The verification code response returned by the server response to get the user attribute verification code.
    """
    
    code_delivery_details: Optional[CodeDeliveryDetailsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
