from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FirehoseAction:
    r"""FirehoseAction
    Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    """
    
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryStreamName') }})
    payload: Optional[Payload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separator') }})
    
