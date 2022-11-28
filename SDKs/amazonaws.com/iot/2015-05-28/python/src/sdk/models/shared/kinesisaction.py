from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisAction:
    r"""KinesisAction
    Describes an action to write data to an Amazon Kinesis stream.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    
