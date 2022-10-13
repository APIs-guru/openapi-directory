from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import kinesisdatastreamdestination


@dataclass_json
@dataclass
class DescribeKinesisStreamingDestinationOutput:
    kinesis_data_stream_destinations: Optional[List[kinesisdatastreamdestination.KinesisDataStreamDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisDataStreamDestinations' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
