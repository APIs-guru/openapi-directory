from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThirdPartySourceRepository:
    connection_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    
