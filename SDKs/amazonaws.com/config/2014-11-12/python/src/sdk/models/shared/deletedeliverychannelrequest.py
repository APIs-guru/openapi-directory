from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDeliveryChannelRequest:
    r"""DeleteDeliveryChannelRequest
    The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. 
    """
    
    delivery_channel_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannelName') }})
    
