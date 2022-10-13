from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import record


@dataclass_json
@dataclass
class PutRecordBatchInput:
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    records: List[record.Record] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    
