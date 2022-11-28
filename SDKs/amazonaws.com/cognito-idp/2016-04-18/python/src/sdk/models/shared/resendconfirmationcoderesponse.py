from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResendConfirmationCodeResponse:
    r"""ResendConfirmationCodeResponse
    The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
    """
    
    code_delivery_details: Optional[CodeDeliveryDetailsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
