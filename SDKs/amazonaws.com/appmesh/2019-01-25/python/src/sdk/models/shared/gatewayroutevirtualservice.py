from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GatewayRouteVirtualService:
    r"""GatewayRouteVirtualService
    An object that represents the virtual service that traffic is routed to.
    """
    
    virtual_service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServiceName') }})
    
