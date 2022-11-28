from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeliverConfigSnapshotRequest:
    r"""DeliverConfigSnapshotRequest
    The input for the <a>DeliverConfigSnapshot</a> action.
    """
    
    delivery_channel_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryChannelName') }})
    
