from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codedeliverydetailstype


@dataclass_json
@dataclass
class SignUpResponse:
    code_delivery_details: Optional[codedeliverydetailstype.CodeDeliveryDetailsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeliveryDetails' }})
    user_confirmed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserConfirmed' }})
    user_sub: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSub' }})
    
