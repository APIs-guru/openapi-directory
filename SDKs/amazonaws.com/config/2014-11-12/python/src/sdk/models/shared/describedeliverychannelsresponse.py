from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDeliveryChannelsResponse:
    r"""DescribeDeliveryChannelsResponse
    The output for the <a>DescribeDeliveryChannels</a> action.
    """
    
    delivery_channels: Optional[List[DeliveryChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannels') }})
    
