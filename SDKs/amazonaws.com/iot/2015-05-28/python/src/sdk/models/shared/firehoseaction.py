from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirehoseAction:
    r"""FirehoseAction
    Describes an action that writes data to an Amazon Kinesis Firehose stream.
    """
    
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryStreamName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    batch_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchMode') }})
    separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separator') }})
    
