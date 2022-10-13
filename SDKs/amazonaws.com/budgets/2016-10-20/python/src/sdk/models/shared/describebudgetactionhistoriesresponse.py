from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionhistory


@dataclass_json
@dataclass
class DescribeBudgetActionHistoriesResponse:
    action_histories: List[actionhistory.ActionHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionHistories' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
