from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutDeliveryChannelRequest:
    r"""PutDeliveryChannelRequest
    The input for the <a>PutDeliveryChannel</a> action.
    """
    
    delivery_channel: DeliveryChannel = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannel') }})
    
