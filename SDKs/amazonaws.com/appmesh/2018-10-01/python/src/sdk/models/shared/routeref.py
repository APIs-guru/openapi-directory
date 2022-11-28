from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RouteRef:
    r"""RouteRef
    An object representing a route returned by a list operation.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    mesh_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    route_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeName') }})
    virtual_router_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    
