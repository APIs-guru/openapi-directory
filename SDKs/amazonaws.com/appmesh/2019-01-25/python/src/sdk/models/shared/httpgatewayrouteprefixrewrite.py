from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPGatewayRoutePrefixRewrite:
    r"""HTTPGatewayRoutePrefixRewrite
    An object representing the beginning characters of the route to rewrite.
    """
    
    default_prefix: Optional[DefaultGatewayRouteRewriteEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPrefix') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
