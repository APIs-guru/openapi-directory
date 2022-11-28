from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRoute:
    r"""HTTPRoute
    An object representing the HTTP routing specification for a route.
    """
    
    action: Optional[HTTPRouteAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: Optional[HTTPRouteMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
