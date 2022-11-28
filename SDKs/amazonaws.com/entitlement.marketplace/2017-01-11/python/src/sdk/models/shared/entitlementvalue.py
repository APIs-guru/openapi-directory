from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntitlementValue:
    r"""EntitlementValue
    The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BooleanValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DoubleValue') }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }})
    
