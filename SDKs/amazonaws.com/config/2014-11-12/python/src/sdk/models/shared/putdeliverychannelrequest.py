from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import deliverychannel


@dataclass_json
@dataclass
class PutDeliveryChannelRequest:
    delivery_channel: deliverychannel.DeliveryChannel = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryChannel' }})
    
