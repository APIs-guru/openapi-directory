from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import portrange


@dataclass_json
@dataclass
class UpdateCustomRoutingListenerRequest:
    listener_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListenerArn' }})
    port_ranges: List[portrange.PortRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortRanges' }})
    
