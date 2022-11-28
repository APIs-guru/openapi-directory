from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CostTypes:
    r"""CostTypes
    <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
    """
    
    include_credit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeCredit') }})
    include_discount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeDiscount') }})
    include_other_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeOtherSubscription') }})
    include_recurring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeRecurring') }})
    include_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeRefund') }})
    include_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeSubscription') }})
    include_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeSupport') }})
    include_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeTax') }})
    include_upfront: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeUpfront') }})
    use_amortized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseAmortized') }})
    use_blended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseBlended') }})
    
