from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagResourceRequest:
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    tags_to_add: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagsToAdd' }})
    
