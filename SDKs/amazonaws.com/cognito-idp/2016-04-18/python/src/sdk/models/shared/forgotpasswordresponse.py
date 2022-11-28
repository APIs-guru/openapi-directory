from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ForgotPasswordResponse:
    r"""ForgotPasswordResponse
    Respresents the response from the server regarding the request to reset a password.
    """
    
    code_delivery_details: Optional[CodeDeliveryDetailsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
