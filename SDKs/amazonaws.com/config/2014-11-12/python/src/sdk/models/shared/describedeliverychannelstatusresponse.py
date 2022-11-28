from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDeliveryChannelStatusResponse:
    r"""DescribeDeliveryChannelStatusResponse
    The output for the <a>DescribeDeliveryChannelStatus</a> action.
    """
    
    delivery_channels_status: Optional[List[DeliveryChannelStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannelsStatus') }})
    
