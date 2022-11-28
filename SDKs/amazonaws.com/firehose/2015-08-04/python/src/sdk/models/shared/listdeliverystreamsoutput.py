from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListDeliveryStreamsOutput:
    delivery_stream_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamNames') }})
    has_more_delivery_streams: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreDeliveryStreams') }})
    
