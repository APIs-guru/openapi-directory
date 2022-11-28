from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCustomRoutingAcceleratorRequest:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressType') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddresses') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
