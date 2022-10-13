from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CostTypes:
    include_credit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeCredit' }})
    include_discount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeDiscount' }})
    include_other_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeOtherSubscription' }})
    include_recurring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeRecurring' }})
    include_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeRefund' }})
    include_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeSubscription' }})
    include_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeSupport' }})
    include_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeTax' }})
    include_upfront: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeUpfront' }})
    use_amortized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseAmortized' }})
    use_blended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseBlended' }})
    
