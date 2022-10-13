from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import record


@dataclass_json
@dataclass
class PutRecordInput:
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    record: record.Record = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Record' }})
    
