from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monetaryamount
from . import recurringchargefrequency_enum


@dataclass_json
@dataclass
class RecurringCharge:
    cost: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    frequency: Optional[recurringchargefrequency_enum.RecurringChargeFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    
