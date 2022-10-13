from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import portrange


@dataclass_json
@dataclass
class CreateCustomRoutingListenerRequest:
    accelerator_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorArn' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    port_ranges: List[portrange.PortRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortRanges' }})
    
