from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCustomRoutingListenerRequest:
    accelerator_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    port_ranges: List[PortRange] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
