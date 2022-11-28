from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeDeliveryChannelsRequest:
    r"""DescribeDeliveryChannelsRequest
    The input for the <a>DescribeDeliveryChannels</a> action.
    """
    
    delivery_channel_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannelNames') }})
    
