from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KinesisAction:
    partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    
