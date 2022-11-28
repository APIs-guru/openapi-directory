from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeKinesisStreamingDestinationOutput:
    kinesis_data_stream_destinations: Optional[List[KinesisDataStreamDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisDataStreamDestinations') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
