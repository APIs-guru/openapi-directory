from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetEntitlementsRequest:
    r"""GetEntitlementsRequest
    The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
    """
    
    product_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    filter: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
