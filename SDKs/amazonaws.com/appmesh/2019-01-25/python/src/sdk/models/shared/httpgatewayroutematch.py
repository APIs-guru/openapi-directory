from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPGatewayRouteMatch:
    r"""HTTPGatewayRouteMatch
    An object that represents the criteria for determining a request match.
    """
    
    headers: Optional[List[HTTPGatewayRouteHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    hostname: Optional[GatewayRouteHostnameMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    method: Optional[HTTPMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    path: Optional[HTTPPathMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    query_parameters: Optional[List[HTTPQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    
