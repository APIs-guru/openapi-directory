from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteSpec:
    r"""RouteSpec
    An object representing the specification of a route.
    """
    
    http_route: Optional[HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    
