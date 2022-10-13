from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceRegistryEnrichActivity:
    attribute: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    thing_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    
