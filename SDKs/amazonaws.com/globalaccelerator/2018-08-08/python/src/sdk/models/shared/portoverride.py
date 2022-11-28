from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortOverride:
    r"""PortOverride
    <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html\"> Port overrides</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    """
    
    endpoint_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointPort') }})
    listener_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerPort') }})
    
