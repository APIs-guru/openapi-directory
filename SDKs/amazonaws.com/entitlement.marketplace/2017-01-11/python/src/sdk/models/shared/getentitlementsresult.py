from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetEntitlementsResult:
    r"""GetEntitlementsResult
    The GetEntitlementsRequest contains results from the GetEntitlements operation.
    """
    
    entitlements: Optional[List[Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
