from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListIdentityPoolUsageResponse:
    r"""ListIdentityPoolUsageResponse
    Returned for a successful ListIdentityPoolUsage request.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    identity_pool_usages: Optional[List[IdentityPoolUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolUsages') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
