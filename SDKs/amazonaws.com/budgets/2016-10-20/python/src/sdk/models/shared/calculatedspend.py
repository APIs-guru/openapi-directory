from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CalculatedSpend:
    r"""CalculatedSpend
    <p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, RI units, or Savings Plans units and the <code>forecastedSpend</code> tracks how much you are predicted to spend based on your historical usage profile.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p>
    """
    
    actual_spend: Spend = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActualSpend') }})
    forecasted_spend: Optional[Spend] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastedSpend') }})
    
