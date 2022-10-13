from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UntagResourceRequest:
    keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    
