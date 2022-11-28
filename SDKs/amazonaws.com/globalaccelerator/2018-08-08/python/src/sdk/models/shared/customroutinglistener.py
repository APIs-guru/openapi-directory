from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomRoutingListener:
    r"""CustomRoutingListener
    A complex type for a listener for a custom routing accelerator.
    """
    
    listener_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    port_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
