from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRouteMatch:
    r"""HTTPRouteMatch
    An object that represents the requirements for a route to match HTTP requests for a virtual router.
    """
    
    headers: Optional[List[HTTPRouteHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[HTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    path: Optional[HTTPPathMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    query_parameters: Optional[List[HTTPQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    scheme: Optional[HTTPSchemeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
