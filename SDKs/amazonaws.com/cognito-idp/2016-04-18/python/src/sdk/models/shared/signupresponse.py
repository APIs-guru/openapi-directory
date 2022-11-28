from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SignUpResponse:
    r"""SignUpResponse
    The response from the server for a registration request.
    """
    
    user_confirmed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserConfirmed') }})
    user_sub: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserSub') }})
    code_delivery_details: Optional[CodeDeliveryDetailsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
