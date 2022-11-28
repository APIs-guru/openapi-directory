from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAccountConfigurationRequest:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    expiry_events: Optional[ExpiryEventsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiryEvents') }})
    
