from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codedeliverydetailstype


@dataclass_json
@dataclass
class ForgotPasswordResponse:
    code_delivery_details: Optional[codedeliverydetailstype.CodeDeliveryDetailsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeliveryDetails' }})
    
