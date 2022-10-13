from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FirehoseAction:
    batch_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchMode' }})
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryStreamName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'separator' }})
    
