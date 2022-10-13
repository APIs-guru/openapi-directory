from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OpenSearchAction:
    endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    index: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
