from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeBudgetsRequest:
    r"""DescribeBudgetsRequest
     Request of DescribeBudgets 
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
