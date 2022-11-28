from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeBudgetResponse:
    r"""DescribeBudgetResponse
     Response of DescribeBudget 
    """
    
    budget: Optional[Budget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Budget') }})
    
