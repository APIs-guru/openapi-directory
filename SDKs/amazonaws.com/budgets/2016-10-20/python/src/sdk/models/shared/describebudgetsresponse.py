from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeBudgetsResponse:
    r"""DescribeBudgetsResponse
     Response of DescribeBudgets 
    """
    
    budgets: Optional[List[Budget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budgets') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
