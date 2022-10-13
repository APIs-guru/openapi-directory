from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverychannel


@dataclass_json
@dataclass
class DescribeDeliveryChannelsResponse:
    delivery_channels: Optional[List[deliverychannel.DeliveryChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryChannels' }})
    
