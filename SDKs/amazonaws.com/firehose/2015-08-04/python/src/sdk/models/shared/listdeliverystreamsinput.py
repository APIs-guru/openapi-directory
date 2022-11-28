from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeliveryStreamsInput:
    delivery_stream_type: Optional[DeliveryStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamType') }})
    exclusive_start_delivery_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartDeliveryStreamName') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
