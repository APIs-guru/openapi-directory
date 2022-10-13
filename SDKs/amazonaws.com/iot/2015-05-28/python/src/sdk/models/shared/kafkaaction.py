from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KafkaAction:
    client_properties: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientProperties' }})
    destination_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationArn' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partition' }})
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
