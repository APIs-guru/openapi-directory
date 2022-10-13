from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KinesisStreamSourceConfiguration:
    kinesis_stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamARN' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
