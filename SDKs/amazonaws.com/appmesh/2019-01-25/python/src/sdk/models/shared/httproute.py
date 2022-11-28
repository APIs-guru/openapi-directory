from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRoute:
    r"""HTTPRoute
    An object that represents an HTTP or HTTP/2 route type.
    """
    
    action: HTTPRouteAction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: HTTPRouteMatch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    retry_policy: Optional[HTTPRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[HTTPTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
