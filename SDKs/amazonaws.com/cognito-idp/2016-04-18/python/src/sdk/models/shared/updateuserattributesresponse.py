from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import codedeliverydetailstype


@dataclass_json
@dataclass
class UpdateUserAttributesResponse:
    code_delivery_details_list: Optional[List[codedeliverydetailstype.CodeDeliveryDetailsType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeDeliveryDetailsList' }})
    
