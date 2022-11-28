from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GatewayRouteHostnameMatch:
    r"""GatewayRouteHostnameMatch
    An object representing the gateway route host name to match.
    """
    
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    
