from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverychannelstatus


@dataclass_json
@dataclass
class DescribeDeliveryChannelStatusResponse:
    delivery_channels_status: Optional[List[deliverychannelstatus.DeliveryChannelStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryChannelsStatus' }})
    
