from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateListenerRequest:
    accelerator_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    port_ranges: List[PortRange] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    protocol: ProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    client_affinity: Optional[ClientAffinityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAffinity') }})
    
