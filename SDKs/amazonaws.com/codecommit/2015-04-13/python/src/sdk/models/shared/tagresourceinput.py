from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagResourceInput:
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    tags: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
